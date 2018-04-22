import React from 'react';

const ProjectsItem = (props) => {
    return (
      <div className="exp-projects-item">
        <img alt="propsImage" src={props.image} />
        {props.job}
        {props.title}
        <div className="bullet-point">
          {props.description_1}
          {props.description_2}
          {props.description_3}
          {props.description_4}
        </div>
      </div>
    );
};

export default ProjectsItem;
