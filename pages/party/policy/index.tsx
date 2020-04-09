import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Party } from '../../../interfaces';
import PartySelection from '../../../components/party/PartySelection';
import { getParties } from '../../../api/internal/election';
import { useRouter } from 'next/router';

interface Props {
  parties?: Party[];
}

const Policy: NextPage<Props> = ({ parties }) => {
  const router = useRouter();

  const handleParty = async (party: Party) => {
    router.push({
      pathname: `${router.pathname}/${party.jdName}`,
    });
  };

  return (
    <div>
      {parties ? (
        <PartySelection parties={parties} onClick={handleParty} />
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
