import Modal from 'react-modal';

import React, { Component } from 'react';
import { projectList } from './list';
import ProjectsPaper from './ProjectsPaper';

export default class Projects extends Component {
  constructor() {
    super();

    this.state = {
      fading: true,
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.time = setTimeout(() => {
      this.setState({ fading: false });
    }, 100);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div className={`${this.state.fading ? 'exp-projects-container-fading' : 'exp-projects-container-faded'}`}>
        <div className="exp-projects-container">
          {projectList.map((project, i) => (
            <ProjectsPaper
              key={i}
              dialogTitle={project.dialogTitle}
              image={project.img}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    );
  }
}
