import AccountLayout from '@/components/AccountLayout';
import SetupLayout from '@/components/SetupLayout';
import Title from '@/components/Title';
import { NextPage } from 'next';
import React from 'react';

const News: NextPage = () => {
  return (
    <AccountLayout>
      <SetupLayout>
        <Title smSize={20}>
          News are waiting for you
        </Title>
      </SetupLayout>
    </AccountLayout>
  );
};

export default News;
