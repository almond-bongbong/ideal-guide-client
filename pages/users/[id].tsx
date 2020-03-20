import * as React from 'react';
import { NextPageContext } from 'next';
import { User } from '../../interfaces';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';

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
    return { id };
  } catch (err) {
    return { errors: err.message };
  }
};

export default InitialPropsDetail;
