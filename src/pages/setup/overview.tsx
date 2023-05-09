import AccountLayout from '@/components/AccountLayout';
import SetupLayout from '@/components/SetupLayout';
import Title from '@/components/Title';
import { NextPage } from 'next';
import React from 'react';

const Overview: NextPage = () => {
  return (
    <AccountLayout>
      <SetupLayout>
        <Title
          smSize={20}
          lineHeight={1.5}
        >
            To set up your account, please open the &apos;Entrepreneur Toolkit&apos; tab
          </Title>
      </SetupLayout>
    </AccountLayout>
  );
};

export default Overview;
