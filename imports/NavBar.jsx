import React, {Component}  from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import AboutMe 		from './about_me/AboutMe';
import Experience   from './experience/Experience';
import Projects     from './projects/Projects';
import Home			from './home/Home';

export default class NavBar extends Component {

	state = {
		aboutmeOpen: false,
		experienceOpen: true,
		projectsOpen: false,
		photographyOpen: false,

	}
	handleClick1 = () => {
		this.setState({
			aboutmeOpen: true,
			experienceOpen: false,
			projectsOpen: false,
			photographyOpen: false,
		})
	}

	handleClick2 = () => {
		this.setState({
			aboutmeOpen: false,
			experienceOpen: true,
			projectsOpen: false,
			photographyOpen: false,
		})
	}

	handleClick3 = () => {
		this.setState({
			aboutmeOpen: false,
			experienceOpen: false,
			projectsOpen: true,
			photographyOpen: false,
		})
	}

	handleClick4 = () => {
		this.setState({
			aboutmeOpen: false,
			experienceOpen: false,
			projectsOpen: false,
			photographyOpen: true,
		})
	}

  	render() {
  		const styles = {
		  tab: {
		  	'backgroundColor': 'rgb(255,255,255)',
		  	'color': 'rgb(0,0,0)'
		  },
		  inkBarStyle: {
		  	backgroundColor: 'rgb(255,255,255)',
		  	zIndex: '1',
		  }
		};

        return (
		<Tabs 
			inkBarStyle={styles.inkBarStyle}
  			tabItemContainerStyle={{width: '600px'}}
			>
			<Tab label="Home" style={styles.tab} onActive={this.handleClick1}>
				<div>
					<AboutMe 
						open={this.state.aboutmeOpen}
					/>
				</div>
			</Tab>
			<Tab label="Skills" style={styles.tab} onActive={this.handleClick1}>
				<div>
					<AboutMe 
						open={this.state.aboutmeOpen}
					/>
				</div>
			</Tab>
			<Tab label="Work" style={styles.tab} onActive={this.handleClick1}>
				<div>
					<AboutMe 
						open={this.state.aboutmeOpen}
					/>
				</div>
			</Tab>
			<Tab label="Projects" style={styles.tab} onActive={this.handleClick1}>
				<div>
					<AboutMe 
						open={this.state.aboutmeOpen}
					/>
				</div>
			</Tab>
			<Tab label="Resume" style={styles.tab} onActive={this.handleClick1}>
				<div>
					<AboutMe 
						open={this.state.aboutmeOpen}
					/>
				</div>
			</Tab>
			<Tab label="Contact Me" style={styles.tab} onActive={this.handleClick1}>
				<div>
					<AboutMe 
						open={this.state.aboutmeOpen}
					/>
				</div>
			</Tab>


		</Tabs>

        );
    }
}
