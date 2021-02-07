import React from 'react';

import classes from 'modules/common/components/Card/styles.module.css';

export const Card = ({ children, className, ...otherProps }) => {
  return (
    <div className={classes.Card + ' ' + className} {...otherProps}>
      {children}
    </div>
  );
};
