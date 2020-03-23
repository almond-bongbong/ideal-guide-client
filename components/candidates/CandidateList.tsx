import React from 'react';
import { Candidate } from '../../interfaces';
import { Falsy } from '../../interfaces/types';
import CandidateInfo from './CandidateInfo';

interface Props {
  candidates: Candidate[];
  districtIdForPhoto?: string | Falsy;
}

function CandidateList({ candidates, districtIdForPhoto }: Props) {
  return (
    <div>
      {candidates.map(c => (
        <CandidateInfo
          key={c.huboid}
          id={c.huboid}
          name={c.name}
          photoUrl={`http://info.nec.go.kr/photo_20200415/Gsg${districtIdForPhoto}/Hb${c.huboid}/gicho/thumbnail.${c.huboid}.JPG`}
        />
      ))}
    </div>
  );
}

export default CandidateList;
