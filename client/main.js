import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Accounts } from './../imports/api/accounts';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let accounts = Accounts.find().fetch();
    ReactDOM.render(<App accounts={accounts}/>, document.getElementById('app'));
  });
});
