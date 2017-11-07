import React, { Component}  from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PersonalWebsite from './PersonalWebsite';

import './styles/App.css';
import './styles/font-awesome.min.css';

export default class App extends Component {

  render() {
        return (
      <MuiThemeProvider>
                <PersonalWebsite />
      </MuiThemeProvider>

        );
    }
}
