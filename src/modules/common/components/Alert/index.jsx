import React from 'react';

import classes from 'modules/common/components/Alert/styles.module.css';

export const Alert = ({ type, className, children, center, ...otherProps }) => {
  let css = classes.Alert;
  if (type) css += ' ' + classes[type[0].toUpperCase() + type.substr(1)];
  if (className) css += ' ' + className;

  return (
    <p style={{ textAlign: center ? 'center' : '' }} className={css} {...otherProps}>
      {children}
    </p>
  );
};
