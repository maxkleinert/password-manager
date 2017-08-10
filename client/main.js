import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

Tracker.autorun(() => {

});

const jsx = (
  <p>It works!</p>
);

Meteor.startup(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
