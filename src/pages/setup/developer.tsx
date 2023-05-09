import AccountLayout from '@/components/AccountLayout';
import SetupLayout from '@/components/SetupLayout';
import Title from '@/components/Title';
import { NextPage } from 'next';
import React from 'react';

const Developer: NextPage = () => {
  return (
    <AccountLayout>
      <SetupLayout>
        <Title smSize={20}>
          Development is your future!
        </Title>
      </SetupLayout>
    </AccountLayout>
  );
};

export default Developer;
