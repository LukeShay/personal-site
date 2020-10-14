import React from 'react';
import Head from 'next/head';
import ChildrenProps from './ChildrenProps';

interface LayoutProps extends ChildrenProps {
  title?: string;
}

function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
}

Layout.defaultProps = {
  title: 'Luke Shay',
};

export default Layout;
