import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.header`
  background-color: ${({ theme }): string => theme.color1};
  color: #fff;
  box-shadow: 0 1px 10px 2px rgba(100, 100, 100, 0.2);
`;

const Content = styled.div`
  position: relative;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 14px 20px;
`;

const Logo = styled.h1`
  font-size: 20px;
`;

const Navigation = styled.nav`
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translateY(-50%);
`;

const NavLink = styled.a<{ active: boolean }>`
  // color: ${({ active, theme }) => (active ? theme.color3 : '')};
  color: #fff;
`;

const menu = [{ link: '/candidates', text: '21대 국회의원 선거 예비후보자' }];

function Header() {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Logo>
          <Link href="/">
            <a>개돼지노노</a>
          </Link>
        </Logo>
        <Navigation>
          {menu.map(m => (
            <Link key={m.text} href={m.link} passHref>
              <NavLink active={router.pathname === m.link}>{m.text}</NavLink>
            </Link>
          ))}
        </Navigation>
      </Content>
    </Container>
  );
}

export default Header;
