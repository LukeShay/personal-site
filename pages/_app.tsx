import '../styles/main.css';
import React from 'react';
import { AppProps } from 'next/app';
import NavBar from '../components/NavBar';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
