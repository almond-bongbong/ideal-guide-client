import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { getDistricts } from '../api/internal/election';
import { District } from '../interfaces';

interface Props {
  districts: District[];
}

const IndexPage: NextPage<Props> = ({ districts }) => {
  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <Link href="/users/[id]" as="/users/101">
        <a title="About Page">about</a>
      </Link>

      {districts.map(d => (
        <div key={d.num}>{d.sggName}</div>
      ))}
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  const { data: districtData } = await getDistricts();

  return {
    districts: districtData.body.items.item,
  };
};

export default IndexPage;
