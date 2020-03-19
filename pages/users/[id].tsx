import * as React from 'react';
import { NextPageContext } from 'next';
import { User } from '../../interfaces';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';
import { sampleFetchWrapper } from '../../utils/sample-api';

type Props = {
  item?: User;
  errors?: string;
};

function InitialPropsDetail({ item, errors }: Props): React.ReactNode {
  if (errors) {
    return (
      <Layout title={`Error | Next.js + TypeScript Example`}>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
}

InitialPropsDetail.getInitialProps = async function({
  query,
}: NextPageContext) {
  try {
    const { id } = query;
    console.log('id : ', id);
    const item = await sampleFetchWrapper(
      `http://localhost:3000/api/users/${Array.isArray(id) ? id[0] : id}`,
    );
    return { item };
  } catch (err) {
    return { errors: err.message };
  }
};

export default InitialPropsDetail;
