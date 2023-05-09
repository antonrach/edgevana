import AccountLayout from '@/components/AccountLayout';
import SetupLayout from '@/components/SetupLayout';
import Title from '@/components/Title';
import { NextPage } from 'next';
import React from 'react';

const Events: NextPage = () => {
  return (
    <AccountLayout>
      <SetupLayout>
        <Title smSize={20}>
          There you&apos;ll see your events
        </Title>
      </SetupLayout>
    </AccountLayout>
  );
};

export default Events;
