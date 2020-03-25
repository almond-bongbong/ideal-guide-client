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
  width: 10%;
  padding: 4px;
`;

const CityButton = styled.button<{ active: boolean }>`
  display: block;
  width: 100%;
  padding: 4px 0;
  background-color: ${({ theme, active }) => (active ? theme.color1 : '#fff')};
  border: 1px solid #ddd;
  border-radius: 5px;
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
