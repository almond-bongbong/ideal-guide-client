import React from 'react';
import { NextPage } from 'next';
import { getDistricts } from '../api/internal/election';

interface Props {
  districts: any;
}

const Candidates: NextPage<Props> = ({ districts }) => {
  console.log(districts);
  return <div>hello</div>;
};

Candidates.getInitialProps = async () => {
  const { data: districtData } = await getDistricts();

  return {
    districts: districtData.body.items.item,
  };
};

export default Candidates;
