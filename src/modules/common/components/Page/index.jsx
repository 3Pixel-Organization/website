import React from 'react';
import classnames from 'classnames';

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
        fluid
        className={classnames(classes.Page, classes.Wide, className)}
        {...otherProps}
      >
        {children}
      </Container>
    </>
  );
};
