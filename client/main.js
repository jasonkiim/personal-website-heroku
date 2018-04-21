import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import React from 'react';
import PersonalWebsite from '../imports/PersonalWebsite';

Meteor.startup(() => {
  ReactDOM.render(<PersonalWebsite />, document.getElementById('app'));
})
