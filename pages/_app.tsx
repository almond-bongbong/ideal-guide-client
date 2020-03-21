import React from 'react';
import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import BasicLayout from '../components/layout/BasicLayout';
import Meta from '../components/layout/Meta';
import { Router } from 'next/router';
import GlobalStyle from '../resources/GlobalStyle';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Meta />
      <GlobalStyle />
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </>
  );
};

export default MyApp;
