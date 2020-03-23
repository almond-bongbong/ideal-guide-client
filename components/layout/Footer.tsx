import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  border-top: 1px solid #eee;
`;

const Content = styled.div`
  position: relative;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
`;

function Footer() {
  return (
    <Container>
      <Content>I'm here to stay (Footer)</Content>
    </Container>
  );
}

export default Footer;
