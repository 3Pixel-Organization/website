import React from 'react';
import { Link } from 'react-router-dom';

import { useNavigation } from '../../hooks/useNavigation';

import classes from './Navbar.module.css';

export const NavItem = ({ text, link }) => {
  const { makeNavigation } = useNavigation();
  return (
    <li className={classes.NavItem} onClick={makeNavigation(link)}>
      <Link to={link}>{text}</Link>
    </li>
  );
};
