import React from 'react';
import classnames from 'classnames';

import classes from 'modules/common/components/Input/styles.module.css';

export const Button = ({ className, children, ...otherProps }) => {
  return (
    <button className={classnames(classes.Button, className)} {...otherProps}>
      {children}
    </button>
  );
};
