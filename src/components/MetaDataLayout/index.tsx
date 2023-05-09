import Head from 'next/head';
import React from 'react';

interface MetaDataLayoutPros {
  title: string,
  description?: string;
  keywords?: string[];
  charSet?: string;
  children: React.ReactNode,
};

const MetaDataLayout: React.FC<MetaDataLayoutPros> = ({
  title,
  description,
  keywords,
  charSet = 'utf-8',
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && (
          <meta name="description" content={description} />
        )}
        {keywords && (
          <meta name="keywords" content={keywords.join(', ')} />
        )}
        <meta charSet={charSet} />
      </Head>
      {children}
    </>
  );
};

export default MetaDataLayout;
