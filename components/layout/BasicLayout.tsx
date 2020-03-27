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
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 380px;
    border-radius: 0 0 0 150px;
    background-color: ${({ theme }): string => theme.color1};
  }
`;

const Content = styled.article`
  position: relative;
  z-index: 10;
  flex: 1 0 auto;
  width: 1180px;
  max-width: 100%;
  margin: 0 auto;
  padding: 60px 20px 100px;
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
