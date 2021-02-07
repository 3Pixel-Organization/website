import React from 'react';

import logo from 'assets/logo.png';
import { Container } from 'modules/common/components/Container';
import classes from 'modules/common/components/Footer/styles.module.css';

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