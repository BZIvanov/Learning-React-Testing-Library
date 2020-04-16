import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useStyles } from './styles';
import { ROOT_PATH } from '../../../constants';

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <nav className={clsx(classes.nav, classes.navTours)}>
        <Link to={ROOT_PATH} className={classes.navElement}>
          All tours
        </Link>
      </nav>
    </header>
  );
};

export default Header;
