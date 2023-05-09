import { createTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const edgevanaTheme: Theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#2B3E9B',
      light: '#F3F4F9',
      dark: '#151F4E',
    },
    secondary: {
      main: '#123FD2',
      light: 'rgba(131, 138, 169, 0.5)',
    },
    info: {
      main: '#DCDFEF',
    },
    text: {
      primary: '#151F4E',
      secondary: '#838AA9',
    },
    background: {
      paper: '#F2F4FC',
      default: 'white'
    },
    action: {
      disabled: '#4B516A',
      disabledBackground: '#b9bcce',
    },
  },
});
