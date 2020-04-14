import React, { useEffect, useRef, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  Candidate,
  CityWithDistricts,
  District,
  DistrictsByCity,
} from '../interfaces';
import CandidateList from '../components/candidate/CandidateList';
import CitySelection from '../components/candidate/CitySelection';
import DistrictSelection from '../components/candidate/DistrictSelection';
import FluidLoader from '../components/loading/FluidLoader';
import districtsForPhoto from '../constants/districtsForPhoto';
import { Falsy } from '../interfaces/types';
import styled from 'styled-components';
import { toast } from 'react-interaction';
import { getCandidates, getDistricts } from '../api/internal/election';

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
  const cities = cityWithDistricts?.map((d) => d.city);
  const city = (query.city as string) || defaultCity;
  const districts =
    cityWithDistricts?.find((d) => d.city === city)?.districts || [];
  const district =
    (query.district as string) || districts[0]?.sggName || defaultDistrict;

  useEffect(() => {
    (async () => {
      if (isDidMountRef.current) {
        if (city && district) {
          setLoading(true);
          try {
            const { data } = await getCandidates(city, district);
            if (data) {
              setCandidates(data.body.items.item);
            }
          } catch (e) {
            toast('데이터를 불러오지 못했습니다.', { time: 3000 });
          } finally {
            setLoading(false);
          }
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
      .find((d) => d.city === candidates[0].sdName)
      ?.districts.find((d) => d.text === candidates[0].sggName)?.value;

  return (
    <div>
      <MenuArea>
        <MenuTitle>시도</MenuTitle>
        <CitySelection
          currentCity={city}
          cities={cities || []}
          onClickCity={handleCity}
        />

        {city && (
          <DistrictWrap>
            <MenuTitle>선거구</MenuTitle>
            <DistrictSelection
              activeDistrictName={district}
              districts={districts}
              onClickDistrict={handleDistrict}
            />
          </DistrictWrap>
        )}
      </MenuArea>

      <CandidateListWrap>
        <CandidateList
          candidates={candidates?.filter((c) => c.status === '등록') || []}
          districtIdForPhoto={districtIdForPhoto}
        />
      </CandidateListWrap>

      {loading && <FluidLoader />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const districtsData = await getDistricts();
  const cityWithDistricts = parseDistrictsByCity(
    districtsData.data.body.items.item,
  );
  const city = (query.city as string) || cityWithDistricts[0].city;
  const districts = cityWithDistricts.find((c) => c.city === city)!.districts;
  const district = (query.district as string) || districts[0].sggName;

  try {
    const candidatesData = await getCandidates(city, district);
    const nextProps = {
      candidates: candidatesData.data.body.items.item,
      cityWithDistricts,
      city,
      district,
    };
    return { props: nextProps };
  } catch (e) {
    return { props: {} };
  }
};

export default Candidates;
