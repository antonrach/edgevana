import { medium, small } from '@/constants';
import submitFormRequest from '@/utils/submitFormRequest';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, SxProps, Theme, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import React, { BaseSyntheticEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import CustomErrorMessage, { ErrorTypography } from '../CustomErrorMessage';
import Description from '../Description';
import { CustomInput, CustomInputLabel } from '../Input';
import PasswordComplexity from '../PasswordComplexity';
import SimpleButton from '../SimpleButton';
import SimpleLink from '../SimpleLink';

interface GeneralInfoFormProps {
  accountType: 'business' | 'individual';
}

const GeneralInfoForm: React.FC<GeneralInfoFormProps> = ({
  accountType,
}) => {
  const { push } = useRouter();

  const theme = useTheme();

  const fieldMargins: SxProps<Theme> = {
    marginBottom: '10px',
    [theme.breakpoints.down(small)]: {
      marginBottom: '5px',
    },
  };

  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [serverError, setServerError] = React.useState<boolean>(false);

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      terms: false,
    },
  });

  const onSubmit = (
    data: { [key: string] : string },
    e: BaseSyntheticEvent<object, any, any> | undefined,
  ) => {
    submitFormRequest({
      setIsLoading,
      setServerError,
      serverError,
      data: {
        ...data,
        'account-type': accountType,
      },
      fetchUrl: '/api/general-info/',
      nextPageUrl: '/nodes',
      push,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit as any)}>
      <Grid container spacing={3} sx={fieldMargins}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            marginBottom: '10px',
            [theme.breakpoints.down(medium)]: {
              marginBottom: '5px',
            },
          }}
        >
          <CustomInputLabel>First Name</CustomInputLabel>
          <Controller
            name='firstname'
            control={control}
            rules={{
              required: 'This is required',
              maxLength: { value: 255, message: 'Too long name.' },
              minLength: { value: 2, message: 'Too short name.' },
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder='First Name'
                onChange={onChange}
                value={value}
              />
            )}
          />
          <CustomErrorMessage errors={errors} name="firstname" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            [theme.breakpoints.down(medium)]: {
              paddingTop: '0 !important',
            },
          }}
        >
          <CustomInputLabel>Last Name</CustomInputLabel>
          <Controller
            name='lastname'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder='Last Name'
                onChange={onChange}
                value={value}
              />
            )}
          />
          <CustomErrorMessage errors={errors} name="lastname" />
        </Grid>
      </Grid>
      <Box sx={fieldMargins}>
        <CustomInputLabel>Username</CustomInputLabel>
        <Controller
          name='username'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              placeholder='Username'
              onChange={onChange}
              value={value}
            />
          )}
        />
        <CustomErrorMessage errors={errors} name="username" />
      </Box>
      <Box sx={fieldMargins}>
        <CustomInputLabel>Email</CustomInputLabel>
        <Controller
          name='email'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              placeholder='Email'
              type='email'
              onChange={onChange}
              value={value}
            />
          )}
        />
        <CustomErrorMessage errors={errors} name="email" />
      </Box>
      <Box sx={fieldMargins}>
        <CustomInputLabel>Password</CustomInputLabel>
        <Controller
          name='password'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => {
                onChange(e);
                setPassword(e.target.value);
              }}
              value={value}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => {
                        setShowPassword((prev) => !prev)
                      }}
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Box
          sx={{
            marginTop: '12px'
          }}
        >
          <PasswordComplexity
            // simple logic, just to show how this indicator works
            level={
              !password.length ? 0 :
              password.length < 4 ? 1 :
              password.length < 8 ? 2
              : 3
            }
          />
        </Box>
        <CustomErrorMessage errors={errors} name="password" />
      </Box>
      <Box 
        sx={fieldMargins}
      >
        <Controller
          name="terms"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              sx={{
                alignItems: 'flex-start',
                '&:hover': {
                  cursor: 'default',
                },
              }}
              control={
                <Checkbox onChange={onChange} value={value} sx={{ paddingTop: 0 }} />
              }
              label={
                <Description>
                  I certify that i am 18 years of age or older, i agree to the to Edgevana`s&nbsp;
                  <SimpleLink href='/'>
                    Terms of Use
                  </SimpleLink>
                  , and i have read the&nbsp;
                  <SimpleLink href='/'>
                    Privacy Policy
                  </SimpleLink>
                  .
                </Description>
              }
            />
          )}
        />
        <CustomErrorMessage errors={errors} name="terms" />
      </Box>
      <Box
          sx={{
            marginTop: '0px',
            marginBottom: '0px',
            opacity: +serverError,
            zIndex: -1,
            position: 'relative',
          }}
        >
          <ErrorTypography>
            Couldn&apos;t create an account. Try again
          </ErrorTypography>
        </Box>
      <Box
        sx={{
          marginBottom: '30px',
        }}
      >
        <SimpleButton
          type='submit'
          fullWidth
          loading={isLoading}
          disabled={isLoading}
        >
          Sign up
        </SimpleButton>
      </Box>
    </form>
  );
};

export default GeneralInfoForm;
