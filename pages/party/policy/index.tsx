import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Party } from '../../../interfaces';
import PartySelection from '../../../components/party/PartySelection';
import { getParties } from '../../../api/internal/election';

interface Props {
  parties?: Party[];
}

const Policy: NextPage<Props> = ({ parties }) => {
  return (
    <div>
      {parties ? (
        <PartySelection parties={parties} />
      ) : (
        <div>정당 정보를 불러오지 못했습니다. 다시 시도해주세요.</div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await getParties();
    return { props: { parties: data.body.items.item } };
  } catch (e) {
    return { props: {} };
  }
};

export default Policy;
