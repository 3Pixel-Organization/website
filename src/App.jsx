import React from 'react';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// 👆 Dependencies

// 👇 Project Components
import { Footer, Navbar, Route } from 'modules/common/components';
import { HomePage } from 'modules/home';
import { LoginPage, ApplyLogout, UserFetcher } from 'modules/authentication';
import { NotFoundPage } from 'modules/common/pages/NotFoundPage';
import { CreateNewsPostPage, ReadNewsPostPage } from 'modules/news';
import { ManagePermissionsPage } from 'modules/admin';

export const App = () => {
  return (
    <>
      <ToastContainer />
      {/* This will call the api to try and login the user */}
      <UserFetcher />
      {/* The Navbar stays out of the switch because it appears in all pages */}
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/logout" exact>
          <ApplyLogout />
        </Route>
        <Route path="/news/create" exact>
          <CreateNewsPostPage />
        </Route>
        <Route path="/news/:slug" exact>
          <ReadNewsPostPage />
        </Route>
        <Route path="/admin/permissions" exact>
          <ManagePermissionsPage />
        </Route>
        <Route path="/">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
