import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      backgroundColor: theme.palette.background.darkGray,
      padding: '0 50px',
      height: '80px',
      position: 'relative',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
    },
    navTours: {},
    navElement: {
      color: theme.palette.common.semiWhite,
      textTransform: 'uppercase',
    },
  })
);
