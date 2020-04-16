import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useStyles } from './styles';
import { ROOT_PATH, SIGNUP_PATH, LOGIN_PATH } from '../../../constants';
import logo from '../../../static/images/logo-white.png';

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <nav className={clsx(classes.nav, classes.navTours)}>
        <Link to={ROOT_PATH} className={classes.navElement}>
          All tours
        </Link>
      </nav>
      <div className={classes.headerLogo}>
        <img src={logo} alt="Tours logo" />
      </div>
      <nav className={clsx(classes.nav, classes.navUser)}>
        <Link to={LOGIN_PATH} className={classes.navElement}>
          Log in
        </Link>
        <Link
          to={SIGNUP_PATH}
          className={clsx(classes.navElement, classes.navElementCta)}
        >
          Sign up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
