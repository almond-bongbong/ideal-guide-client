import React from 'react';
import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import BasicLayout from '../components/layout/BasicLayout';
import Meta from '../components/layout/Meta';
import { Router } from 'next/router';
import GlobalStyle from '../style/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from '../style/theme';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <GlobalStyle />
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </ThemeProvider>
  );
};

export default MyApp;
