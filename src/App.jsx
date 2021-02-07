import React from 'react';
import { Switch, Route } from 'react-router-dom';
// 👆 Dependencies

// 👇 Project Components
import { Footer } from 'components/footer/Footer';
import { Navbar } from 'components/navbar/Navbar';
import { Page } from 'components/page/Page';
import { About } from 'pages/about/About';
import { Home } from 'pages/home/Home';
import { UserFetcher } from 'components/auth/UserFetcher';
import { Login } from 'pages/authentication/Login';
import { ApplyLogout } from 'components/auth/ApplyLogout';
import { ErrorBoundary } from 'components/error-boundary/ErrorBoundary';
import { FallbackPage } from 'components/error-boundary/FallbackPage';

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
