import React from 'react';
import ChildrenProps from './ChildrenProps';
import Layout from './Layout';

interface PageProps extends ChildrenProps {
  title?: string;
}

function Page({ children, title }: PageProps) {
  return <Layout title={title}>{children}</Layout>;
}

Page.defaultProps = {
  title: 'Luke Shay',
};

export default Page;
