import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { getCandidates, getDistricts } from '../api/internal/election';
import { Candidate } from '../interfaces';

interface Props {
  candidates: Candidate[];
  totalCount: number;
}

const IndexPage: NextPage<Props> = ({ candidates, totalCount }) => {
  console.log(totalCount);

  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <Link href="/users/[id]" as="/users/101">
        <a title="About Page">about</a>
      </Link>

      {candidates.map(candidate => (
        <div key={candidate.huboid}>
          <span className="name">{candidate.name}</span>
          <span>{candidate.age}세</span>
          <span>{candidate.edu}</span>
          <span>{candidate.job}</span>
          <span>{candidate.career1}</span>
        </div>
      ))}
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  const { data: candidatesData } = await getCandidates('');
  const { data: districtData } = await getDistricts();

  return {
    districts: districtData.body.items,
    candidates: candidatesData.body.items.item,
    totalCount: parseInt(candidatesData.body.totalCount, 10),
  };
};

export default IndexPage;
