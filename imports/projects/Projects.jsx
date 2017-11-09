import React, { Component}  from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {projectList} from '../imageLists';

import ProjectPaper  from './ProjectPaper';
export default class Projects extends Component {

    render() {
        return (
            <div className="projects-container">
                {projectList.map((project, i) => (
                    <ProjectPaper
                        key={i}   
                        dialogTitle={project.dialogTitle}  
                        image={project.img}
                        title={project.title}
                        technologies={project.technologies}
                        description={project.description}
                    />
                ))}
            </div>
        )
    }
}
