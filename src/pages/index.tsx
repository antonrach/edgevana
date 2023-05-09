import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const { push } = useRouter();

  React.useEffect(() => {
    push('/sign-up/account-type');
  }, [push]);
  
  return null;
};

export default Home;
