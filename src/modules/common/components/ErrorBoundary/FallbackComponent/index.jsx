import React from 'react';

import classes from 'modules/common/components/ErrorBoundary/styles.module.css';

export const FallbackComponent = () => {
  return <div className={classes.Fallback}>Uh oh...</div>;
};
