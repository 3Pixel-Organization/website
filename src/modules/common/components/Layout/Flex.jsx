import React from 'react';
import classnames from 'classnames';

import classes from 'modules/common/components/Layout/styles.module.css';

export const Flex = ({
  children,
  alignCenter,
  justifyCenter,
  justifyStart,
  row,
  column,
  fluid,
  fadeIn,
  className,
  as,
  ...otherProps
}) => {
  let css = classnames(classes.Container, className, {
    [classes.AlignCenter]: !!alignCenter,
    [classes.JustifyCenter]: !!justifyCenter,
    [classes.JustifyStart]: !!justifyStart,
    [classes.Row]: !!row,
    [classes.Column]: !!column,
    [classes.Fluid]: !!fluid,
    [classes.FadeIn]: !!fadeIn,
  });

  let Component = as || 'div';

  return (
    <Component className={css} {...otherProps}>
      {children}
    </Component>
  );
};
