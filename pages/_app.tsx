import React from 'react';
import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './header';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
