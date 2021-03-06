import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';
import colorByParty from '../../../constants/colorByParty';
import PartyPolicySelection from '../../../components/party/PartyPolicySelection';
import { useRouter } from 'next/router';
import { Party } from '../../../interfaces';
import { getParties, getPartyPolicy } from '../../../api/external/gov';

interface Props {
  policy: {
    [key: string]: string;
  };
}

const Container = styled.div`
  padding: 30px 30px 50px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h3<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 26px;
`;

const PartyPolicySelectionWrap = styled.div`
  margin-top: 30px;
`;

const PolicyList = styled.ul`
  margin-top: 40px;
`;

const PolicyItem = styled.li`
  & + & {
    border-top: 1px solid #eee;
  }

  strong {
    display: block;
    margin-top: 10px;
    color: #333;
    font-size: 20px;
  }

  p {
    margin-top: 20px;
    color: #333;
    font-size: 14px;
    white-space: pre-line;
  }
`;

const EmptyPolicy = styled.div`
  font-size: 18px;
`;

function PartyName({ policy }: Props) {
  const [activeRealmId, setActiveRealmId] = useState(0);
  const router = useRouter();
  const realmNames = policy
    ? [
        policy.prmsRealmName1,
        policy.prmsRealmName2,
        policy.prmsRealmName3,
        policy.prmsRealmName4,
        policy.prmsRealmName5,
        policy.prmsRealmName6,
        policy.prmsRealmName7,
        policy.prmsRealmName8,
        policy.prmsRealmName9,
        policy.prmsRealmName10,
      ].filter(Boolean)
    : [];
  const realm = realmNames.map((r, i) => ({ id: i, name: r }));

  const handlePolicy = (id: number) => {
    setActiveRealmId(id);
  };

  return (
    <Container>
      <Title color={colorByParty.get(router.query.partyName)}>
        {router.query.partyName} 정책
      </Title>

      <PartyPolicySelectionWrap>
        <PartyPolicySelection
          realm={realm}
          activeRealmId={activeRealmId}
          onClick={handlePolicy}
        />
      </PartyPolicySelectionWrap>

      {policy ? (
        <PolicyList>
          <PolicyItem>
            <strong>{policy[`prmsTitle${activeRealmId + 1}`]}</strong>
            <p>{policy[`prmmCont${activeRealmId + 1}`]}</p>
          </PolicyItem>
        </PolicyList>
      ) : (
        <EmptyPolicy>검색된 정책이 없습니다.</EmptyPolicy>
      )}
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getParties();
  const paths = response.body.items.item.map((p: Party) => ({
    params: { partyName: p.jdName },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (params?.partyName) {
      const response = await getPartyPolicy(params.partyName as string);
      if (response.body.items.item) {
        return { props: { policy: response.body.items.item } };
      }
    }
    return { props: {} };
  } catch (e) {
    return { props: {} };
  }
};

export default PartyName;
