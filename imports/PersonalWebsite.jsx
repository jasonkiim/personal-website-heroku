import React, {Component}  from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Home 		from './Home';
import NavBar 		from './NavBar';
import Skills 		from './skills/Skills';
export default class PersonalWebsite extends Component {

  render() {
        return (
		<Router>
			<div className="container">
		        <NavBar />
				<Route exact path='/' component={Home} />
				<Route path='/skills' component={Skills} />
				<Route path='/resume/JasonKimW2017.pdf' />
			</div>
        </Router>
        );
    }
}
