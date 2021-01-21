import React from 'react';

import { Container } from '../container/Container';

import classes from './Page.module.css';

export const Page = ({ children, hero, className = '', ...otherProps }) => {
  return (
    <>
      {!!hero && hero}
      <Container
        justifyCenter
        column
        fadeIn
        className={classes.Page + ' ' + className}
        {...otherProps}
      >
        {children}
      </Container>
    </>
  );
};
