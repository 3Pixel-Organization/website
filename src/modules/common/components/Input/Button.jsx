import React from 'react';
import classnames from 'classnames';

import classes from 'modules/common/components/Input/styles.module.css';

export const Button = ({ className, children, as = 'button', ...otherProps }) => {
  const Component = as;
  const css = classnames(classes.Button, className);

  if (as === 'input' && otherProps.type === 'submit') {
    return <input value={children} className={css} {...otherProps} />;
  }

  return (
    <Component className={css} {...otherProps}>
      {children}
    </Component>
  );
};
