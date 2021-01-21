import React from 'react';
import { Switch, Route } from 'react-router-dom';
// 👆 Dependencies

// 👇 Project Components
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Page } from './components/page/Page';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import { UserFetcher } from './services/auth/UserFetcher';

export const App = () => {
  return (
    <>
      {/* This will call the api to try and login the user */}
      <UserFetcher />
      {/* The navbar stays out of the switch because it appears in all pages */}
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/'>
          <Page alignCenter>
            <h1>Uh oh. There is nothing here...</h1>
          </Page>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
