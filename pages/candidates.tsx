import React, { useEffect, useRef, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { getCandidates, getDistricts } from '../api/internal/election';
import { Candidate, District, DistrictsByCity } from '../interfaces';
import CandidateList from '../components/candidates/CandidateList';
import CityList from '../components/candidates/CityList';
import DistrictList from '../components/candidates/DistrictList';
import FluidLoader from '../components/loading/FluidLoader';

interface Props {
  districts: District[];
  candidates: Candidate[] | null;
}

const parseDistrictsByCity = (districts: District[]): DistrictsByCity =>
  districts.reduce((acc: DistrictsByCity, cur: District) => {
    if (!acc[cur.sdName]) {
      acc[cur.sdName] = [];
    }

    acc[cur.sdName].push(cur);
    return acc;
  }, {});

const Candidates: NextPage<Props> = ({
  districts,
  candidates: defaultCandidates,
}) => {
  const router = useRouter();
  const { query } = router;
  const isDidMountRef = useRef<boolean>(false);
  const city = query.city as string;
  const district = query.district as string;
  const [candidates, setCandidates] = useState(defaultCandidates);
  const [loading, setLoading] = useState<Boolean>(false);
  const districtsByCity = parseDistrictsByCity(districts);
  const cities = Object.keys(districtsByCity);

  useEffect(() => {
    (async () => {
      if (isDidMountRef.current) {
        if (district) {
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

  console.log(districts);

  return (
    <div>
      <CityList cities={cities} onClickCity={handleCity} />
      {query.city && (
        <DistrictList
          districts={districtsByCity[query.city as string]}
          onClickDistrict={handleDistrict}
        />
      )}
      <CandidateList candidates={candidates || []} districtsId="1234" />

      {loading && <FluidLoader />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data: districtsData } = await getDistricts();
  const nextProps = {
    districts: districtsData.body.items.item,
    candidates: null,
  };

  if (query.city && query.district) {
    const { data: candidatesData } = await getCandidates(
      query.city as string,
      query.district as string,
    );
    nextProps.candidates = candidatesData.body.items.item;
  }

  return { props: nextProps };
};

export default Candidates;
