import '../styles/tailwind.css';
import React from 'react';
import { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import { projects } from '../lib/projects';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
