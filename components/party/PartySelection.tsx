import React from 'react';
import { Party } from '../../interfaces';

interface Props {
  parties: Party[];
}

function PartySelection({ parties }: Props) {
  return (
    <ul>
      {parties
        .filter((p) => p.jdName !== '무소속')
        .map((p) => (
          <li>{p.jdName}</li>
        ))}
    </ul>
  );
}

export default PartySelection;