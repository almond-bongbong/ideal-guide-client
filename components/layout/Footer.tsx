import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  border-top: 1px solid #eee;
`;

function Footer() {
  return (
    <Container>
      <span>I'm here to stay (Footer)</span>
    </Container>
  );
}

export default Footer;
