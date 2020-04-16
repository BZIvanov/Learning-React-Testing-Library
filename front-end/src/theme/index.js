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
    },
    background: {
      darkGray: '#444444',
    },
  },
});
