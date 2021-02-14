import React from 'react';
import classnames from 'classnames';

import classes from 'modules/common/components/Input/styles.module.css';

export const TextInput = React.forwardRef(({ children, className, ...otherProps }, ref) => {
  return (
    <input
      {...otherProps}
      ref={ref}
      className={classnames(classes.TextInput, className)}
      type="text"
    />
  );
});
