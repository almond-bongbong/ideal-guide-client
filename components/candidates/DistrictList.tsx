import React from 'react';
import { District } from '../../interfaces';

interface Props {
  districts: District[];
  onClickDistrict: (district: District) => void;
}

function DistrictList({ districts, onClickDistrict }: Props) {
  return (
    <div>
      {districts.map(d => (
        <button key={d.num} type="button" onClick={() => onClickDistrict(d)}>
          {d.sggName}
        </button>
      ))}
    </div>
  );
}

export default DistrictList;
