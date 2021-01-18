import React from 'react';
import { Switch, Route } from 'react-router-dom';
// 👆 Dependencies

// 👇 Project Components
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';

export const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
