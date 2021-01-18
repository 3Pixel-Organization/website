import React from 'react';

import classes from './Footer.module.css';
import logo from '../../assets/logo.png';
import { Container } from '../container/Container';

export const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <Container justifyCenter alignCenter column>
        <span>© {new Date().getFullYear()} - 3 Pixel Team</span>
        <br />
        <img src={logo} alt='3Pixel logo' className={classes.Image} />
      </Container>
    </footer>
  );
};
