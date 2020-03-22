import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.header``;

const Content = styled.div`
  position: relative;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Navigation = styled.nav`
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translateY(-50%);
`;

const NavLink = styled.a<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#ddd' : '')};
`;

const menu = [
  { link: '/candidates', text: '21대 국회의원 선거 후보자' },
  { link: '/about', text: 'About' },
];

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
