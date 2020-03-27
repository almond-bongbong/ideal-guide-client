import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background-color: #f6f6f6;
`;

const Content = styled.div`
  position: relative;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 30px 20px;
  color: #777;
`;

function Footer() {
  return (
    <Container>
      <Content>Copyright 2020&copy; Corp. All Rights Reserved.</Content>
    </Container>
  );
}

export default Footer;
