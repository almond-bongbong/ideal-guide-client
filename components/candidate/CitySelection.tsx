import React from 'react';
import styled from 'styled-components';
import { Tooltip } from 'react-interaction';

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
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding: 4px 0;
  background-color: ${({ theme, active }) => (active ? theme.color1 : '#fff')};
  border: 1px solid #ddd;
  border-radius: 5px;
  color: ${({ active }) => (active ? '#fff' : '#555')};
  font-weight: ${({ active }) => (active ? 700 : 400)};
  white-space: nowrap;
`;

function CitySelection({ currentCity, cities, onClickCity }: Props) {
  return (
    <Container>
      {cities.map((c: string) => (
        <ButtonWrap key={c}>
          <Tooltip message={c}>
            <CityButton
              type="button"
              active={c === currentCity}
              onClick={() => onClickCity(c)}
            >
              {c}
            </CityButton>
          </Tooltip>
        </ButtonWrap>
      ))}
    </Container>
  );
}

export default CitySelection;
