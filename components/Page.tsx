import React from 'react';
import ChildrenProps from './ChildrenProps';
import Layout from './Layout';

export interface PageProps extends ChildrenProps {
  title?: string;
  pageTitle?: string;
}

function Page({ children, title, pageTitle }: PageProps) {
  return (
    <Layout title={title || pageTitle}>
      {pageTitle && (
        <div className="w-full text-center">
          <h1 className="w-full pb-4 font-bold">{pageTitle}</h1>
        </div>
      )}
      {children}
    </Layout>
  );
}

export default Page;
