import { small } from '@/constants';
import { Box, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import React from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import Description from '../Description';
import Title from '../Title';

export interface AccountOptionProps {
  icon: React.ReactNode,
  title: string;
  description: string;
  selected?: boolean;
};

const AccountOption: React.FC<AccountOptionProps> = ({
  icon,
  title,
  description,
  selected = false,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: '25px 30px',
        borderRadius: '8px',
        border: `${selected ? '1.5' : '1'}px solid ${selected ? theme.palette.secondary.main : theme.palette.secondary.light}`,
        transition: '.3s',
        display: 'flex',
        [theme.breakpoints.down(small)]: {
          padding: '15px',
        },
      }}
    >
      <Box
        sx={{
          marginRight: '28px',
          width: '40px',
          [theme.breakpoints.down(small)]: {
            marginRight: '10px',
          },
        }}>
          {icon}
        </Box>
        <Box sx={{ width: 'calc(100% - 40px - 28px)' }}>
          <Box
            sx={{
              marginBottom: '10px'
            }}
          >
            <Title size={16}>{title}</Title>
          </Box>
          <Box>
            <Description>{description}</Description>
          </Box>
        </Box>
    </Box>
  )
};

interface AccountPickerProps {
  options: (Omit<AccountOptionProps, 'selected'> & { key: string; value: string; })[];
  controllerOptions: Partial<ControllerProps> & Pick<ControllerProps, 'name'>,
  defaultOption?: string;
};

const AccountPicker: React.FC<AccountPickerProps> = ({
  options,
  controllerOptions,
  defaultOption,
}) => {  
  const [activeOption, setActiveOption] = React.useState(defaultOption || '');
  return (
    <>
      <>
        <Controller
          {...controllerOptions}
          render={({ field }) => (
            <RadioGroup {...field}>
              {options.map((option, index, arr) => {
                const {key, ...optionProps} = option;
                return (
                  <FormControlLabel
                    sx={{
                      marginRight: 0,
                      marginLeft: 0,
                      width: '100%',
                      '& .MuiFormControlLabel-label': {
                        width: '100%',
                      }
                    }}
                    control={<Radio sx={{ display: 'none' }} />}
                    value={option.value}
                    onChange={() => { setActiveOption(option.value) }}
                    key={option.key}
                    label={(
                      <Box
                        sx={{
                          marginBottom: index === arr.length - 1 ? '0' : '20px',
                          width: '100%',
                        }}
                      >
                        <AccountOption {...optionProps} selected={activeOption === option.value} />
                      </Box>
                    )}
                  />
                )
              })}
            </RadioGroup>
          )}
        />
      </>
    </>
  );
}

export default AccountPicker;
