import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.header`
  position: relative;
  z-index: 100;
  color: #fff;
  box-shadow: 0 1px 10px 2px rgba(100, 100, 100, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const Content = styled.div`
  position: relative;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 16px 20px 18px;
`;

const Logo = styled.h1`
  font-size: 26px;

  > * {
    vertical-align: middle;
  }

  span {
    margin-left: 20px;
    font-weight: 400;
    font-size: 16px;
  }
`;

const Navigation = styled.nav`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

const NavLink = styled.a<{ active: boolean }>`
  position: relative;
  color: #fff;
  font-size: 18px;

  & + & {
    margin-left: 30px;
  }

  ${({ active }) =>
    active &&
    `
    &:after {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      bottom: -25px;
      height: 3px;
      background-color: #fff;
    }
  `}
`;

const menu = [
  { link: '/candidates', text: '국회의원선거' },
  { link: '/party/policy', text: '정당정책' },
];

function Header() {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Logo>
          <Link href="/">
            <a>vote</a>
          </Link>
          <span>제21대 국회의원선거</span>
        </Logo>
        <Navigation>
          {menu.map((m) => (
            <Link key={m.text} href={m.link} passHref>
              <NavLink active={router.pathname.startsWith(m.link)}>{m.text}</NavLink>
            </Link>
          ))}
        </Navigation>
      </Content>
    </Container>
  );
}

export default Header;
