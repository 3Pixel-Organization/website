import React from 'react';

import { Container } from 'components/container/Container';

import classes from 'components/page/Page.module.css';

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
