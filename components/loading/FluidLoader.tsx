import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  font-size: 0;
  transform: translate(-50%, -50%);

  img {
    display: block;
    width: 100%;
  }
`;

function FluidLoader() {
  return (
    <Container>
      <Content>
        <img src="/images/fluid-loader.svg" alt="" />
      </Content>
    </Container>
  );
}

export default FluidLoader;
