import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Content = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px rgba(100, 100, 100, 0.6);
  font-size: 0;
  transform: translate(-50%, -50%);

  img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140%;
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
