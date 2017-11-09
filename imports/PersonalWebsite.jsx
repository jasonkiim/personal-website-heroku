import React, {Component}  from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

import Home 		from './Home';
import NavBar 		from './NavBar';
import Skills 		from './skills/Skills';
import Experience   from './experience/Experience';
import Projects     from './projects/Projects';
import classNames                                      from 'classnames';

export default class PersonalWebsite extends Component {

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

	state = {
		step: 1,
		clicked: false
	};

	handleStepChange = (changedStep) =>
	{
		this.setState({
			step: changedStep
		});
	}

  handleClick = (e) => 
  {
  	let clickToggle = !this.state.clicked
    if (this.node.contains(e.target)) {
    	this.setState({clicked: clickToggle})
    } else {
    }
  }

  	render() {
        return (
  		<CSSTransitionGroup
  		    transitionName="step"
  		    transitionEnter={true}
  		    transitionLeave={false}
		    transitionEnterTimeout={500}
		>

			<div ref={node => this.node = node} className="container" key={0}>
		        <NavBar 
		        	{...this.state}
		        	handleStepChange={this.handleStepChange}
		        />
          		<CSSTransitionGroup
          		    transitionName="step"
          		    transitionEnter={true}
          		    transitionLeave={false}
				    transitionEnterTimeout={500}
				>
				{/* IIFE in JSX */}
				{[(() =>
				{
					if(this.state.step === 1)
					{
						return (
							<Home
								key={1}
								{...this.state}
							/>
						);
					}

					else if (this.state.step === 2)
					{
						return(
							<div style={{textAlign: 'center', width: '100%'}} key = {2}>
  							<h2> Stack </h2>
							<Skills
								{...this.state}
							/>
							</div>
						);
					}
					else if (this.state.step === 3)
					{
						return(
							<div style={{textAlign: 'center', width: '100%'}} key = {3}>
	  							<h2> Experience </h2>
								<Experience
									{...this.state}
								/>
							</div>
						);
					}
					else if (this.state.step === 4)
					{
						return(
							<div style={{textAlign: 'center', width: '100%'}} key = {4}>
  							<h2> Projects </h2>
							<Projects
								key={4}
								{...this.state}
							/>
							</div>
						);
					}
					else if (this.state.step === 6)
					{
						return(
							<div style={{textAlign: 'center', width: '100%'}} key = {6}>
  							<h2> Experience </h2>
							<Experience
								key={6}
								{...this.state}
							/>
							</div>
						);
					}
				})()]}
				</CSSTransitionGroup>
			</div>
		</CSSTransitionGroup>
        );
    }
}
