import React from 'react';
import { District } from '../../interfaces';
import styled from 'styled-components';

interface Props {
  activeDistrictName?: string;
  districts: District[];
  onClickDistrict: (district: District) => void;
  className?: string;
}

const Container = styled.div`
  overflow: hidden;
`;

const Content = styled.div`
  margin: 0 -10px;
`;

const ButtonWrap = styled.div`
  display: inline-block;
  width: 10%;
`;

const DistrictButton = styled.button<{ active: boolean }>`
  display: block;
  width: 100%;
  position: relative;
  padding: 5px 10px;
  color: ${({ theme, active }) => (active ? theme.color1 : '#666')};
  font-weight: ${({ active }) => (active ? 700 : 400)};
  font-size: 14px;
  text-decoration: ${({ active }) => (active ? 'underline' : '')};

  &:after {
    content: '';
    display: block;
    position: absolute;
    right: -2px;
    top: 16px;
    width: 4px;
    height: 4px;
    margin-top: -2px;
    background-color: #ddd;
  }
`;

function DistrictList({
  activeDistrictName,
  districts,
  onClickDistrict,
  className,
}: Props) {
  return (
    <Container className={className}>
      <Content>
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
      </Content>
    </Container>
  );
}

export default DistrictList;
