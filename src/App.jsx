import React from 'react';
import { Switch, Route } from 'react-router-dom';
// 👆 Dependencies

// 👇 Project Components
import { Footer } from 'modules/common/components/footer/Footer';
import { Navbar } from 'modules/common/components/navbar/Navbar';
import { Page } from 'modules/common/components/page/Page';
import { About } from 'modules/about/pages/About';
import { Home } from 'modules/home/pages/Home';
import { UserFetcher } from 'modules/authentication/components/user-fetcher/UserFetcher';
import { Login } from 'modules/authentication/pages/Login';
import { ApplyLogout } from 'modules/authentication/components/apply-logout/ApplyLogout';
import { ErrorBoundary } from 'modules/common/components/error-boundary/ErrorBoundary';
import { FallbackPage } from 'modules/common/components/error-boundary/FallbackPage';

export const App = () => {
  return (
    <>
      {/* This will call the api to try and login the user */}
      <UserFetcher />
      {/* The navbar stays out of the switch because it appears in all pages */}
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <ErrorBoundary FallbackComponent={FallbackPage}>
            <About />
          </ErrorBoundary>
        </Route>
        <Route path="/login" exact>
          <ErrorBoundary FallbackComponent={FallbackPage}>
            <Login />
          </ErrorBoundary>
        </Route>
        <Route path="/logout" exact>
          <ErrorBoundary FallbackComponent={FallbackPage}>
            <ApplyLogout />
          </ErrorBoundary>
        </Route>
        <Route path="/">
          <Page alignCenter>
            <h1>Uh oh. There is nothing here...</h1>
          </Page>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
