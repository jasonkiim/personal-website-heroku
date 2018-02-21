import React, { Component } from 'react';
import {CSSTransitionGroup} from 'react-transition-group';

import './styles/App.css';

import PersonalWebsite from './PersonalWebsite';

export default class App extends Component {

    render() {
        return (
            <div>
                <PersonalWebsite />
            </div>
        );
    }
}
