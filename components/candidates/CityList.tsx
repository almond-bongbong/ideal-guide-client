import React from 'react';
import styled from 'styled-components';

interface Props {
  currentCity?: string;
  cities: string[];
  onClickCity: (city: string) => void;
}

const Container = styled.div`
  overflow: hidden;
  margin: -4px;
`;

const ButtonWrap = styled.div`
  display: inline-block;
  padding: 4px;
`;

const CityButton = styled.button<{ active: boolean }>`
  display: block;
  padding: 8px 12px;
  background-color: ${({ theme, active }) => (active ? theme.color3 : '#fafafa')};
  border-radius: 3px;
  box-shadow: ${({ active }) =>
    active
      ? '1px 1px 1px 1px rgba(100, 100, 100, 0.1)'
      : '1px 1px 1px 1px rgba(100, 100, 100, 0.1)'};
  color: ${({ active }) => (active ? '#fff' : '#555')};
  font-weight: ${({ active }) => (active ? 700 : 400)};
`;

function CityList({ currentCity, cities, onClickCity }: Props) {
  return (
    <Container>
      {cities.map((c: string) => (
        <ButtonWrap key={c}>
          <CityButton
            type="button"
            active={c === currentCity}
            onClick={() => onClickCity(c)}
          >
            {c}
          </CityButton>
        </ButtonWrap>
      ))}
    </Container>
  );
}

export default CityList;
