import React from 'react';

import { Container } from 'modules/common/components/Container';

import classes from 'modules/common/components/Page/styles.module.css';

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
