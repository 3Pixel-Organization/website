import React from 'react';

import classes from 'components/card/Card.module.css';

export const Card = ({ children, className, ...otherProps }) => {
  return (
    <div className={classes.Card + ' ' + className} {...otherProps}>
      {children}
    </div>
  );
};
