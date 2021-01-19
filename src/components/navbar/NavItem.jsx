import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

export const NavItem = ({ text, link }) => {
  return (
    <li className={classes.NavItem}>
      <Link to={link}>{text}</Link>
    </li>
  );
};
