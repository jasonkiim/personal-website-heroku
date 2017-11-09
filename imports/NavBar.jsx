import React, {Component}  from 'react';
import Slider from 'material-ui/Slider';
import classNames                                      from 'classnames';
import Home 		from './Home';
import Skills 		from './skills/Skills';
import Experience   from './experience/Experience';
import Projects     from './projects/Projects';

export default class NavBar extends Component {



  	render() {
        const {step} = this.props;

        return (
        <div style={{width: '100%', marginBottom: '30px'}}>
	      <ul className="navbar">
	        <li><a className={classNames("nav-tab", {"active-nav-tab": step == 1})} onClick={()=>this.props.handleStepChange(1)}>home</a></li>
	        <li><a className={classNames("nav-tab", {"active-nav-tab": step == 2})} onClick={()=>this.props.handleStepChange(2)}>skills</a></li>
	        <li><a className={classNames("nav-tab", {"active-nav-tab": step == 3})} onClick={()=>this.props.handleStepChange(3)}>work</a></li>
	        <li><a className={classNames("nav-tab", {"active-nav-tab": step == 4})} onClick={()=>this.props.handleStepChange(4)}>projects</a></li>
	        <li><a className="nav-tab" href="./JasonKimW2017.pdf" target="_blank">resume</a></li>
	        <li><a className="nav-tab" href="mailto:e53kim@edu.uwaterloo.ca" target="_top">contact</a></li>
	      </ul>
	      </div>
        );
    }
}
