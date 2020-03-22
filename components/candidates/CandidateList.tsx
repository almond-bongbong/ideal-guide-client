import React from 'react';
import { Candidate } from '../../interfaces';
import styled from 'styled-components';

interface Props {
  candidates: Candidate[];
  districtsId: string;
}

const Thumbnail = styled.img`
  display: block;
  width: 80px;
`;

function CandidateList({ candidates, districtsId }: Props) {
  return (
    <div>
      {candidates.map(c => (
        <div key={c.huboid}>
          <Thumbnail
            src={`http://info.nec.go.kr/photo_20200415/Gsg${districtsId}/Hb${c.huboid}/gicho/${c.huboid}.JPG`}
            alt="후보자 사진"
          />
          <span>{c.name}</span>
        </div>
      ))}
    </div>
  );
}

export default CandidateList;
