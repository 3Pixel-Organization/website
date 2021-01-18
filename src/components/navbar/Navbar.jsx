import React from 'react';

import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { Container } from '../container/Container';
import { useNavigation } from '../../hooks/useNavigation';

export const Navbar = () => {
  const { makeNavigation } = useNavigation();

  return (
    <Container style={{ background: 'black', minHeight: '4rem' }} justifyCenter row>
      <div
        className={classes.Brand}
        style={{ cursor: 'pointer' }}
        onClick={makeNavigation('/')}
      >
        <img className={classes.BrandImage} src={logo} alt='Team 3Pixel logo' /> 3Pixel
      </div>
      <nav className={classes.Links}>
        <Container as='ul' style={{ justifyContent: 'flex-end' }} alignCenter row fluid>
          <li
            className={classes.NavItem}
            style={{ cursor: 'pointer' }}
            onClick={makeNavigation('/')}
          >
            Home
          </li>
          <li
            className={classes.NavItem}
            style={{ cursor: 'pointer' }}
            onClick={makeNavigation('/about')}
          >
            About Us
          </li>
        </Container>
      </nav>
    </Container>
  );
};
