import React from 'react';

interface Props {
  cities: string[];
  onClickCity: (city: string) => void;
}

function CityList({ cities, onClickCity }: Props) {
  return (
    <div>
      {cities.map(c => (
        <button key={c} type="button" onClick={() => onClickCity(c)}>
          {c}
        </button>
      ))}
    </div>
  );
}

export default CityList;
