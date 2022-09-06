import React from 'react';
import '../styles/global.scss';
import type { AppProps } from 'next/app';
import Header from './header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
