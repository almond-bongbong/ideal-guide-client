import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import xml2js from 'xml2js';
import { getSubCandidates } from '../api/election';

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
  const { data } = await getSubCandidates();
  const { response } = await xml2js.parseStringPromise(data, {
    headless: true,
    explicitArray: false,
    mergeAttrs: true,
  });

  return {
    candidates: response.body.items,
    totalCount: parseInt(response.body.totalCount, 10),
  };
};

export default IndexPage;
