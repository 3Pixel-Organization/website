import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';

import { ErrorBoundary } from 'modules/common/components/ErrorBoundary';
import { FallbackPage } from 'modules/common/components/ErrorBoundary/FallbackPage';

export const Route = ({ children, ...otherProps }) => {
  return (
    <ReactRoute {...otherProps}>
      <ErrorBoundary FallbackComponent={FallbackPage}>{children}</ErrorBoundary>
    </ReactRoute>
  );
};
