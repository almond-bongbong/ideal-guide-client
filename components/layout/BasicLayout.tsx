import * as React from 'react';
import Header from './Header';
import Meta from './Meta';

type Props = {
  title?: string;
};

const BasicLayout: React.FunctionComponent<Props> = ({ children }) => (
  <div id="container">
    <Meta />
    <Header />
    <article>{children}</article>
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default BasicLayout;
