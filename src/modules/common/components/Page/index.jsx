import React from 'react';
import classnames from 'classnames';

import { Flex } from 'modules/common/components/Layout';

import classes from 'modules/common/components/Page/styles.module.css';

export const Page = ({ children, hero, className = '', ...otherProps }) => {
  return (
    <>
      {!!hero && hero}
      <Flex
        justifyCenter
        column
        fadeIn
        fluid
        className={classnames(classes.Page, classes.Wide, className)}
        {...otherProps}
      >
        {children}
      </Flex>
    </>
  );
};
