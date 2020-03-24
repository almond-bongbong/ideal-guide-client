import React from 'react';
import { Candidate } from '../../interfaces';
import { Falsy } from '../../interfaces/types';
import CandidateInfo from './CandidateInfo';
import styled from 'styled-components';

interface Props {
  className?: string;
  candidates: Candidate[];
  districtIdForPhoto?: string | Falsy;
}

const Container = styled.div`
  overflow: hidden;
  margin: -15px;
`;

const CandidateInfoWrap = styled(CandidateInfo)`
  float: left;
  padding: 15px;
  width: 20%;
`;

function CandidateList({ candidates, districtIdForPhoto, className }: Props) {
  return (
    <Container className={className}>
      {candidates.map(c => (
        <CandidateInfoWrap
          key={c.huboid}
          id={c.huboid}
          name={c.name}
          photoUrl={`http://info.nec.go.kr/photo_20200415/Gsg${districtIdForPhoto}/Hb${c.huboid}/gicho/thumbnail.${c.huboid}.JPG`}
        />
      ))}
    </Container>
  );
}

export default CandidateList;
