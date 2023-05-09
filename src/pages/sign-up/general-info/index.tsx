import Description from '@/components/Description';
import GeneralInfoForm from '@/components/GeneralInfoForm';
import MetaDataLayout from '@/components/MetaDataLayout';
import SignUpPageLayout from '@/components/SignUpPageLayout';
import SimpleLink from '@/components/SimpleLink';
import Title from '@/components/Title';
import { medium, small } from '@/constants';
import { Box, useTheme } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import Incentives from '../../../../public/pics/Incentives.png';
import Mobile from '../../../../public/pics/Mobile.png';

const GeneralInfo: NextPage = () => {
  const theme = useTheme();

  const { query } = useRouter();
  const accountType: 'individual' | 'business' = useMemo(
    () => query['account-type'] === 'business' ? 'business' : 'individual',
    [query],
  );

  return (
    <MetaDataLayout
      title={`${ accountType === 'business' ? 'Business' : 'Individual'} account`}
      description="Creating account"
    >
      <SignUpPageLayout
        leftChildren={
          <Box
            sx={{
              [theme.breakpoints.up(medium)]: {
                maxWidth: '400px',
              }
            }}
          >
            <Box
              sx={{
                marginBottom: '11px',
              }}
            >
              <Title>Sign Up</Title>
            </Box>
            <Box
              sx={{
                marginBottom: '32px',
                [theme.breakpoints.down(small)]: {
                  marginBottom: '20px',
                },
              }}
            >
              <Description
                size={15}
              >
                Create your account
              </Description>
            </Box>
            <Box>
              <GeneralInfoForm accountType={accountType} />
            </Box>
            <Box>
              <Description size={14} center>
                <SimpleLink
                  href={
                    `/sign-up/general-info/?account-type=${
                      accountType === 'business' ? 'individual' : 'business'
                    }`
                  }
                >
                  Sign up
                </SimpleLink>
                &nbsp;for {accountType === 'business' ? 'individual' : 'business'} account
              </Description>
            </Box>
          </Box>
        }
        rightChildren={
          <>
            <Box
              sx={{
                marginBottom: '20px',
              }}
            >
              <Title
                size={42}
                smSize={22}
                center
              >
                Earn free crypto after making your first purchase.
              </Title>
            </Box>
            <Box
              sx={{
                marginBottom: '50px',
                [theme.breakpoints.down(medium)]: {
                  marginBottom: '30px',
                },
                [theme.breakpoints.down(small)]: {
                  marginBottom: '20px',
                },
              }}
            >
              <Description center>
                *The average Edgevana operator earns $950 a month in incentives.&nbsp;
                <SimpleLink href='/'>See Terms</SimpleLink>
              </Description>
            </Box>
            <Box>
              <Box
                sx={{
                  margin: 'auto',
                  position: 'relative',
                  paddingBottom: '0',
                }}
              >
                <Box
                  component="img"
                  src={Incentives.src}
                  alt="Incentives"
                  sx={{
                    width: '100%',
                  }}
                />
                <Box
                  component="img"
                  src={Mobile.src}
                  alt="Mobile"
                  sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '28%',
                    height: 'auto',
                    transform: 'translate(-23%, 0%)',
                  }}
                />
              </Box>
            </Box>
          </>
        }
        specialPaddingLeft={false}
      />
    </MetaDataLayout>
  );
};

export default GeneralInfo;
