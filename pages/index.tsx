import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { getCandidates, getDistricts } from '../api/internal/election';

interface Props {
  candidates: any;
  totalCount: number;
}

const IndexPage: NextPage<Props> = ({ candidates, totalCount }) => {
  console.log(candidates, totalCount);

  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <Link href="/users/[id]" as="/users/101">
        <a title="About Page">about</a>
      </Link>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  const { data: candidatesData } = await getCandidates();
  const { data: districtData } = await getDistricts();

  return {
    districts: districtData.body.items,
    candidates: candidatesData.body.items,
    totalCount: parseInt(candidatesData.body.totalCount, 10),
  };
};

export default IndexPage;
