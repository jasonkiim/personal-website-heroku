import Modal from 'react-modal';

import React, { Component } from 'react';
import { projectList } from './list';
import ProjectsItem from './ProjectsItem';

export default class Projects extends Component {
    state = {
      fading: true,
    }

    componentDidMount() {
      this.time = setTimeout(() => {
        this.setState({ fading: false });
      }, 100);
    }

    render() {
      return (
        <div className={`${this.state.fading ? 'exp-projects-container-fading' : 'exp-projects-container'}`}>
          {projectList.map((project, i) => (
            <React.Fragment>
              <button onClick={this.openModal}>Open Modal</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
              >

                <ProjectsItem
                  key={i}
                  description_1={project.description_1}
                  description_2={project.description_2}
                  description_3={project.description_3}
                  description_4={project.description_4}
                  job={project.job}
                  image={project.img}
                  title={project.title}
                />
              </Modal>
            </React.Fragment>
          ))}
        </div>
      );
    }
}
