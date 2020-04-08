import React from 'react';
import { Party } from '../../interfaces';
import styled from 'styled-components';
import colorByParty from '../../constants/colorByParty';

interface Props {
  parties: Party[];
}

const Container = styled.ul`
  overflow: hidden;
`;

const PartyWrap = styled.li`
  float: left;
  width: 20%;
  padding: 6px;
`;

const PartyButton = styled.button<{ color: string }>`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding: 20px 5px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  color: ${({ color }) => (color ? color : '#666')};
  font-weight: 700;
  font-size: 16px;
  white-space: nowrap;

  &:hover {
    background-color: #fafafa;
  }
`;

function PartySelection({ parties }: Props) {
  return (
    <Container>
      {parties
        .filter((p) => p.jdName !== '무소속')
        .map((p) => (
          <PartyWrap key={p.num}>
            <PartyButton color={colorByParty.get(p.jdName)}>
              {p.jdName}
            </PartyButton>
          </PartyWrap>
        ))}
    </Container>
  );
}

export default PartySelection;
