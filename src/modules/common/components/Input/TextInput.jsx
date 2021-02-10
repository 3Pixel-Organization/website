import React from 'react';
import classnames from 'classnames';

import classes from 'modules/common/components/Input/styles.module.css';

export const TextInput = ({ children, className, ...otherProps }) => {
  return <input {...otherProps} className={classnames(classes.TextInput, className)} type="text" />;
};
