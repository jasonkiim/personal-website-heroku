import React, { Component } from 'react';

import LoadingPage from './LoadingPage';
import NavBar from './NavBar';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Contacts from './Contacts';

import './styles/App.css';

export default class PersonalWebsite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      clicked: false,
      fading: true,
      loadingDone: false,
    };
  }

  handleFadeChange = () => {
    this.setState({ fading: false });
  }

  loadOnce = () => {
    this.setState({ loadingDone: true });
  }

  handleStepChange = (stepType) => {
    if (stepType === 'HOME') {
      this.setState({ step: 1, fading: true });
    } else if (stepType === 'EXPERIENCE') {
      this.setState({ step: 2, fading: true });
    } else if (stepType === 'PROJECTS') {
      this.setState({ step: 3, fading: true });
    } else if (stepType === 'CONTACT') {
      this.setState({ step: 4, fading: true });
    }
  }

  render() {
    return (
      <div className="container" key={0}>
        {/* IIFE in JSX */}
        {[(() => {
            if (this.state.step === 0) {
              return (
                <div>
                  <LoadingPage
                    {...this.state}
                    loadOnce={this.loadOnce}
                  />
                  <NavBar
                    {...this.state}
                    handleStepChange={this.handleStepChange}
                    handleFadeChange={this.handleFadeChange}
                    top="EXPERIENCE"
                    right="PROJECTS"
                    bottom="CONTACT"
                    left="RESUME"
                    delay={3000}
                  />
                  <Home
                    {...this.state}
                  />
                </div>
              );
             } else if (this.state.step === 1) {
               return (
                 <div>
                   <NavBar
                     {...this.state}
                     handleStepChange={this.handleStepChange}
                     handleFadeChange={this.handleFadeChange}
                     top="EXPERIENCE"
                     right="PROJECTS"
                     bottom="CONTACT"
                     left="RESUME"
                     delay={400}
                   />
                   <Home
                     {...this.state}
                   />
                 </div>
               );
             } else if (this.state.step === 2) {
               return (
                 <div>
                   <NavBar
                     {...this.state}
                     handleStepChange={this.handleStepChange}
                     handleFadeChange={this.handleFadeChange}
                     top="HOME"
                     right="PROJECTS"
                     bottom="CONTACT"
                     left="RESUME"
                     delay={400}
                   />
                   <Experience
                     {...this.state}
                   />
                 </div>
               );
             } else if (this.state.step === 3) {
               return (
                 <div>
                   <NavBar
                     {...this.state}
                     handleStepChange={this.handleStepChange}
                     handleFadeChange={this.handleFadeChange}
                     top="EXPERIENCE"
                     right="HOME"
                     bottom="CONTACT"
                     left="RESUME"
                     delay={400}
                   />
                   <Projects
                     {...this.state}
                   />
                 </div>
               );
             } else if (this.state.step === 4) {
               return (
                 <div>
                   <NavBar
                     {...this.state}
                     handleStepChange={this.handleStepChange}
                     handleFadeChange={this.handleFadeChange}
                     top="EXPERIENCE"
                     right="PROJECTS"
                     bottom="HOME"
                     left="RESUME"
                     delay={400}
                   />
                   <Contacts
                     {...this.state}
                   />
                 </div>
               );
             }
           })()]}
      </div>
    );
  }
}
