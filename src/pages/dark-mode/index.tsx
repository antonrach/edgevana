import AccountLayout from '@/components/AccountLayout';
import MetaDataLayout from '@/components/MetaDataLayout';
import UnderConstructionMessage from '@/components/UnderConstructionMessage';
import { NextPage } from 'next';
import React from 'react';

const DarkMode: NextPage = () => {
  return (
    <MetaDataLayout
      title="Dark Mode"
      description="Dark Mode is not ready yet"
    >
      <AccountLayout>
        <UnderConstructionMessage>
          Dark theme is not available yet but you&apos;ll be able to try it very soon
        </UnderConstructionMessage>
      </AccountLayout>
    </MetaDataLayout>
  );
};

export default DarkMode;
