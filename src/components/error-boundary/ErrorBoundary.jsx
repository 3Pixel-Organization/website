import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { FallbackComponent } from 'components/error-boundary/FallbackComponent';

export const ErrorBoundary = ({ children, ...otherProps }) => {
  return (
    <ReactErrorBoundary FallbackComponent={FallbackComponent} {...otherProps}>
      {children}
    </ReactErrorBoundary>
  );
};
