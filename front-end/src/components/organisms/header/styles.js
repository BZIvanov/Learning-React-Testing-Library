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
    navTours: {
      flex: '0 1 40%',
    },
    navUser: {
      flex: '0 1 40%',
      justifyContent: 'flex-end',
    },
    navElement: {
      '&:link, &:visited': {
        color: theme.palette.common.semiWhite,
        textTransform: 'uppercase',
        fontSize: '16px',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'all 0.2s',
        fontWeight: 400,
        cursor: 'pointer',
        fontFamily: 'inherit',
      },
      '&:hover, &:active': {
        transform: 'translateY(-2px)',
        textShadow: '0 0.7rem 1rem black',
      },
      '&:not(:last-child)': {
        marginRight: '30px',
      },
    },
    navElementCta: {
      padding: '10px 30px',
      borderRadius: '100px',
      border: `1px solid ${theme.palette.background.semiWhite}`,
      transition: 'all 0.3s',
      '&:hover': {
        backgroundColor: theme.palette.background.semiWhite,
        color: theme.palette.common.semiGray,
        textShadow: 'none',
        borderColor: theme.palette.background.semiGray,
      },
    },
    headerLogo: {
      '& img': {
        height: '35px',
      },
    },
  })
);
