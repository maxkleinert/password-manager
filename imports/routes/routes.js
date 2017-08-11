import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import TitleBar from '../ui/TitleBar';
import Signup from '../ui/Signup';
import Account from '../ui/AccountItem';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/accounts'];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/accounts');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/accounts');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};
export const routes = (
  <div>
    <TitleBar title="Account Manager"/>
    <div className="wrapper">
      <div className="pageContent">
        <Router history={browserHistory}>
          <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
          <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
          <Route path="/accounts" component={Account} onEnter={onEnterPrivatePage}/>
          <Route path="*" component={NotFound}/>
        </Router>
      </div>
    </div>
  </div>
);
