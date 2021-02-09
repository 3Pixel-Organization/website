import React from 'react';
import { Switch, Route } from 'react-router-dom';
// 👆 Dependencies

// 👇 Project Components
import { ErrorBoundary, FallbackPage, Footer, Navbar } from 'modules/common/components';
import { HomePage } from 'modules/home';
import { LoginPage, ApplyLogout, UserFetcher } from 'modules/authentication';
import { NotFoundPage } from './modules/common/pages/NotFoundPage';

export const App = () => {
  return (
    <>
      {/* This will call the api to try and login the user */}
      <UserFetcher />
      {/* The Navbar stays out of the switch because it appears in all pages */}
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login" exact>
          <ErrorBoundary FallbackComponent={FallbackPage}>
            <LoginPage />
          </ErrorBoundary>
        </Route>
        <Route path="/logout" exact>
          <ErrorBoundary FallbackComponent={FallbackPage}>
            <ApplyLogout />
          </ErrorBoundary>
        </Route>
        <Route path="/">
          <ErrorBoundary>
            <NotFoundPage />
          </ErrorBoundary>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
