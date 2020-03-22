import React from 'react';
import { District } from '../../interfaces';
import styled from 'styled-components';

interface Props {
  districts: District[];
  onClickDistrict: (district: District) => void;
}

const Container = styled.div`
  margin-top: 20px;
`;

const DistrictButton = styled.button`
  display: inline-block;
  border: 1px solid #ddd;
`;

function DistrictList({ districts, onClickDistrict }: Props) {
  return (
    <Container>
      {districts.map(d => (
        <DistrictButton
          key={d.num}
          type="button"
          onClick={() => onClickDistrict(d)}
        >
          {d.sggName}
        </DistrictButton>
      ))}
    </Container>
  );
}

export default DistrictList;
