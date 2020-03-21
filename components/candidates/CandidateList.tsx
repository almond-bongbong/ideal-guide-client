import React from 'react';
import { Candidate } from '../../interfaces';

interface Props {
  candidates: Candidate[];
}

function CandidateList({ candidates }: Props) {
  return (
    <div>
      {candidates.map(c => (
        <div key={c.huboid}>
          <span>{c.name}</span>
        </div>
      ))}
    </div>
  );
}

export default CandidateList;
