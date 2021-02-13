import React from 'react';

import logo from 'assets/logo.png';
import { Flex } from 'modules/common/components/Layout';
import classes from 'modules/common/components/Footer/styles.module.css';

export const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <Flex justifyCenter alignCenter column>
        <span>© {new Date().getFullYear()} - 3 Pixel Team</span>
        <br />
        <img src={logo} alt='3Pixel logo' className={classes.Image} />
      </Flex>
    </footer>
  );
};
