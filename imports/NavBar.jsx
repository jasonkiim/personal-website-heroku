import React, {Component}  from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router-dom';
import Slider from 'material-ui/Slider';

import Home 		from './Home';
import Skills 		from './skills/Skills';
import Experience   from './experience/Experience';
import Projects     from './projects/Projects';

export default class NavBar extends Component {


  	render() {
  		const styles = {
		  tab: {
		  	'backgroundColor': 'rgb(255,255,255)',
		  	'color': 'rgb(0,0,0)',
		  	'fontFamily': 'Montserrat'
		  },
		  inkBarStyle: {
		  	backgroundColor: 'rgb(0,0,0)',
		  	zIndex: '1',
		  }
		};

        return (
	      <ul className="navbar">
	        <li><Link to="/">home</Link></li>
	        <li><Link to="/skills">skills</Link></li>
	        <li><Link to="/work">work</Link></li>
	        <li><Link to="/projects">projects</Link></li>
	        <li><a href="./JasonKimW2017.pdf"> resume </a></li>
	        <li><Link to="/contactme">contact</Link></li>
	      </ul>

        );
    }
}
