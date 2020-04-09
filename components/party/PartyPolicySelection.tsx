import React from 'react';
import styled from 'styled-components';

interface Props {
  realm: {
    id: number;
    name: string;
  }[];
  activeRealmId: number;
  onClick: (id: number) => void;
}

const Container = styled.div`
  overflow: hidden;
`;

const Content = styled.div`
  margin: -4px;
  font-size: 0;
`;

const ButtonWrap = styled.div`
  display: inline-block;
  padding: 4px;
`;

const PolicyButton = styled.button<{ active: boolean }>`
  display: block;
  width: 100%;
  padding: 8px 14px;
  border: ${({ active }) => (active ? '1px solid #333' : '1px solid #ddd')};
  color: ${({ active }) => (active ? '#333' : '#666')};
  font-weight: ${({ active }) => (active ? 700 : 400)};
  font-size: 14px;
`;

function PartyPolicySelection({ realm, activeRealmId, onClick }: Props) {
  return (
    <Container>
      <Content>
        {realm.map((r) => (
          <ButtonWrap key={r.id}>
            <PolicyButton
              type="button"
              active={r.id === activeRealmId}
              onClick={() => onClick(r.id)}
            >
              {r.name}
            </PolicyButton>
          </ButtonWrap>
        ))}
      </Content>
    </Container>
  );
}

export default PartyPolicySelection;
