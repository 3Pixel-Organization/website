import React from 'react';
import classnames from 'classnames';

import classes from 'modules/common/components/Card/styles.module.css';

export const Card = ({ children, className, as = 'div', ...otherProps }) => {
  const Component = as;

  return (
    <Component className={classnames(classes.Card, className)} {...otherProps}>
      {children}
    </Component>
  );
};
