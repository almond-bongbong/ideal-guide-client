import React, { ReactNode } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';

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
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 30px 20px;
`;

function BasicLayout({ children }: Props) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}

export default BasicLayout;
