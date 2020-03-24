import React from 'react';
import { District } from '../../interfaces';
import styled from 'styled-components';

interface Props {
  activeDistrictName?: string;
  districts: District[];
  onClickDistrict: (district: District) => void;
}

const Container = styled.div`
  margin-top: 20px;
`;

const ButtonWrap = styled.div`
  display: inline-block;
`;

const DistrictButton = styled.button<{ active: boolean }>`
  display: block;
  padding: 5px 10px;
  color: ${({ active }) => (active ? '#333' : '#666')};
  font-size: 13px;
  font-weight: ${({ active }) => (active ? 700 : 400)};
  text-shadow: ${({ active }) =>
    active ? '1px 1px 3px rgba(100, 100, 100, 0.3)' : ''};
`;

function DistrictList({
  activeDistrictName,
  districts,
  onClickDistrict,
}: Props) {
  return (
    <Container>
      {districts.map(d => (
        <ButtonWrap key={d.num}>
          <DistrictButton
            type="button"
            active={activeDistrictName === d.sggName}
            onClick={() => onClickDistrict(d)}
          >
            {d.sggName}
          </DistrictButton>
        </ButtonWrap>
      ))}
    </Container>
  );
}

export default DistrictList;
