import { small } from "@/constants";
import setPlaceholderStyle from "@/utils/setPlaceholderStyle";
import { styled, SxProps, Theme } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export const CustomInputLabel = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.text.primary,
  marginBottom: '8px',
  fontWeight: 600,
  [theme.breakpoints.down(small)]: {
    marginBottom: '4px',
  },
}));

export const CustomInput = styled(TextField)(({ theme }) => {
  const placeholderStyle: SxProps<Theme> = {
    color: theme.palette.text.secondary,
  };

  return {
    width: '100%',
    '& > div': {
      backgroundColor: theme.palette.primary.light,
      borderRadius: '8px',
      transition: '.3s',
      border: '1px solid transparent',
      '&.Mui-focused': {
        borderColor: theme.palette.secondary.main,
        transition: '.3s',
      },
    },
    '& input': {
      borderRadius: '8px',
      fontSize: '14px',
      padding: '17px',
      fontWeight: 500,
      fontFamily: [
        'Inter',
        'sans-serif',
      ].join(','),
      transition: '.3s',
      color: theme.palette.text.primary,
      width: '100%',
      [theme.breakpoints.down(small)]: {
        padding: '9px',
      },
      ...setPlaceholderStyle(placeholderStyle),
    },
    '& fieldset': {
      border: 'none',
    }
  }
});
