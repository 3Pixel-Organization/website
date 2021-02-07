import React from 'react';

import classes from 'modules/common/components/error-boundary/FallbackUI.module.css';

export const FallbackComponent = () => {
  return <div className={classes.Fallback}>Uh oh...</div>;
};
