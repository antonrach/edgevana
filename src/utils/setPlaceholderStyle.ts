import { SxProps, Theme } from '@mui/material';

const setPlaceholderStyle = (placeholderStyle: SxProps<Theme>) => {
  return ({
    '&::-webkit-input-placeholder': placeholderStyle,
    ':-ms-input-placeholder': placeholderStyle,
    '::placeholder': placeholderStyle,
    '::-moz-placeholder': placeholderStyle,
    ':-moz-placeholder': placeholderStyle,
  });
};

export default setPlaceholderStyle;
