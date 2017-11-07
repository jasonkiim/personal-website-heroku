import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import React from 'react';
import App from '../imports/App';

Meteor.startup(() => {
  ReactDOM.render(<App/>, document.getElementById('app'));
})
