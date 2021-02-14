import React from 'react';
import TextAreaAutosize from 'react-textarea-autosize';
import classnames from 'classnames';

import classes from 'modules/common/components/Input/styles.module.css';

export const TextArea = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <TextAreaAutosize
      className={classnames(classes.TextArea, className)}
      {...otherProps}
      ref={ref}
    />
  );
});
