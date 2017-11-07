import React, { Component}  from 'react';

import TextField       from 'material-ui/TextField';

import NavBar           from './NavBar';

export default class Header extends Component {

  	render() {
    const styles = {
      floatingLabelStyle: {
        color: '#ffffff',
      },
      floatingLabelFocusStyle: {
        color: '#ffffff',
      },
      hintStyle: {
        color: '#ffffff',
        fontSize: '30px',
        marginBottom: '5px'
      },
      underlineStyle: {
        borderColor: '#ffffff',
      },
      inputStyle: {
        color: 'transparent'
      }
    };


        return (
        <div>
            <div className="container">
                <NavBar />
            </div>
        </div>
        );
    }
}
