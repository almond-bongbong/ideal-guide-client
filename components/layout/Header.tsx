import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>
            <h1>개돼지노노</h1>
          </a>
        </Link>
        <Link href="/candidates">
          <a>21대 국회의원 선거 후보자</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
