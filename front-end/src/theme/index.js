import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    common: {
      semiWhite: '#f7f7f7',
      semiGray: '#777777',
    },
    background: {
      darkGray: '#444444',
      semiWhite: '#f7f7f7',
      semiGray: '#777777',
    },
  },
});
