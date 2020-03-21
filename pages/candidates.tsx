import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getCandidates, getDistricts } from '../api/internal/election';
import { Candidate, District, DistrictsByCity } from '../interfaces';
import CandidateList from '../components/candidates/CandidateList';
import CityList from '../components/candidates/CityList';
import DistrictList from '../components/candidates/DistrictList';

interface Props {
  districts: District[];
}

const parseDistrictsByCity = (districts: District[]): DistrictsByCity =>
  districts.reduce((acc: DistrictsByCity, cur: District) => {
    if (!acc[cur.sdName]) {
      acc[cur.sdName] = [];
    }

    acc[cur.sdName].push(cur);
    return acc;
  }, {});

const Candidates: NextPage<Props> = ({ districts }) => {
  const router = useRouter();
  const { query } = router;
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const districtsByCity = parseDistrictsByCity(districts);
  const cities = Object.keys(districtsByCity);

  const handleCity = (city: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: { city },
      },
      undefined,
      {
        shallow: true,
      },
    );
  };

  const handleDistrict = async (district: District) => {
    const { data } = await getCandidates(district.sdName, district.sggName);
    setCandidates(data.body.items.item);
  };

  return (
    <div>
      <CityList cities={cities} onClickCity={handleCity} />
      {query.city && (
        <DistrictList
          districts={districtsByCity[query.city as string]}
          onClickDistrict={handleDistrict}
        />
      )}
      <CandidateList candidates={candidates || []} />
    </div>
  );
};

Candidates.getInitialProps = async () => {
  const { data } = await getDistricts();

  return {
    districts: data.body.items.item,
  };
};

export default Candidates;
