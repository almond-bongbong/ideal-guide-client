import React, { ReactNode } from 'react';
import Header from './Header';
import styled from 'styled-components';

interface Props {
  title?: string;
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.article`
  flex: 1 0 auto;
`;

function BasicLayout({ children }: Props) {
  return (
    <Container>
      <Header />
      <Content>
        {children}
      </Content>
      <footer>
        <span>I'm here to stay (Footer)</span>
      </footer>
    </Container>
  );
}

export default BasicLayout;
