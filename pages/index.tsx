import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import ElectionPartyInfoTable from '../components/election/ElectionPartyInfoTable';

const Container = styled.div`
  display: block;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  color: #555;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 20px;

  em {
    display: block;
    margin-bottom: 10px;
    color: #333;
    font-size: 26px;
  }
`;

const IndexPage: NextPage = () => {
  return (
    <Container>
      <Title>
        <em>2020년 4월 15일 수요일</em>
        대한민국 제21대 국회의원 선거
      </Title>

      <ElectionPartyInfoTable />
    </Container>
  );
};

export default IndexPage;
