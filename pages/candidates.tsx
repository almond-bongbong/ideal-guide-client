import React, { useEffect, useRef, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { getCandidates, getDistricts } from '../api/internal/election';
import {
  Candidate,
  CityWithDistricts,
  District,
  DistrictsByCity,
} from '../interfaces';
import CandidateList from '../components/candidates/CandidateList';
import CityList from '../components/candidates/CityList';
import DistrictList from '../components/candidates/DistrictList';
import FluidLoader from '../components/loading/FluidLoader';
import districtsForPhoto from '../constants/districtsForPhoto';
import { Falsy } from '../interfaces/types';
import styled from 'styled-components';

interface Props {
  cityWithDistricts?: CityWithDistricts[];
  candidates?: Candidate[] | null;
  city?: string;
  district?: string;
}

const MenuArea = styled.div`
  display: block;
  padding: 40px 34px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(100, 100, 100, 0.4);
`;

const CandidateListWrap = styled.div`
  margin-top: 50px;
`;

const MenuTitle = styled.em`
  display: block;
  margin-bottom: 15px;
  font-size: 17px;
`;

const DistrictWrap = styled.div`
  margin-top: 35px;
`;

const parseDistrictsByCity = (districts: District[]): CityWithDistricts[] => {
  const districtsByCity = districts.reduce(
    (acc: DistrictsByCity, cur: District) => {
      if (!acc[cur.sdName]) {
        acc[cur.sdName] = [];
      }

      acc[cur.sdName].push(cur);
      return acc;
    },
    {},
  );

  return Object.entries(districtsByCity).map(([city, districts]) => ({
    city,
    districts,
  }));
};

const Candidates: NextPage<Props> = ({
  cityWithDistricts,
  candidates: defaultCandidates,
  city: defaultCity,
  district: defaultDistrict,
}) => {
  const router = useRouter();
  const { query } = router;
  const isDidMountRef = useRef<boolean>(false);
  const [candidates = [], setCandidates] = useState(defaultCandidates);
  const [loading, setLoading] = useState<Boolean>(false);
  const cities = cityWithDistricts?.map(d => d.city);
  const city = (query.city as string) || defaultCity;
  const districts =
    cityWithDistricts?.find(d => d.city === city)?.districts || [];
  const district =
    (query.district as string) || districts[0]?.sggName || defaultDistrict;

  useEffect(() => {
    (async () => {
      if (isDidMountRef.current) {
        if (city && district) {
          setLoading(true);
          const { data: candidatesData } = await getCandidates(city, district);
          setCandidates(candidatesData.body.items.item);
          setLoading(false);
        } else {
          setCandidates([]);
        }
      }
    })();
  }, [district]);

  useEffect(() => {
    isDidMountRef.current = true;
  }, []);

  const pushQuery = (nextQuery: { city?: string; district?: string }) => {
    router.push(
      {
        pathname: router.pathname,
        query: nextQuery,
      },
      undefined,
      {
        shallow: true,
      },
    );
  };

  const handleCity = (selectedCity: string) => {
    pushQuery({ city: selectedCity });
  };

  const handleDistrict = async (selectedDistrict: District) => {
    pushQuery({ city, district: selectedDistrict.sggName });
  };

  const districtIdForPhoto: string | Falsy =
    candidates &&
    candidates.length > 0 &&
    districtsForPhoto
      .find(d => d.city === candidates[0].sdName)
      ?.districts.find(d => d.text === candidates[0].sggName)?.value;

  return (
    <div>
      <MenuArea>
        <MenuTitle>시도</MenuTitle>
        <CityList
          currentCity={city}
          cities={cities || []}
          onClickCity={handleCity}
        />

        {city && (
          <DistrictWrap>
            <MenuTitle>선거구</MenuTitle>
            <DistrictList
              activeDistrictName={district}
              districts={districts}
              onClickDistrict={handleDistrict}
            />
          </DistrictWrap>
        )}
      </MenuArea>

      <CandidateListWrap>
        <CandidateList
          candidates={candidates?.filter(c => c.status === '등록') || []}
          districtIdForPhoto={districtIdForPhoto}
        />
      </CandidateListWrap>

      {loading && <FluidLoader />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data: districtsData } = await getDistricts();
  const cityWithDistricts = parseDistrictsByCity(districtsData.body.items.item);
  const city = (query.city as string) || cityWithDistricts[0].city;
  const districts = cityWithDistricts.find(c => c.city === city)!.districts;
  const district = (query.district as string) || districts[0].sggName;

  try {
    const { data: candidatesData } = await getCandidates(city, district);
    const nextProps = {
      candidates: candidatesData,
      cityWithDistricts,
      city,
      district,
    };
    return { props: nextProps };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default Candidates;
