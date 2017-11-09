import React, { Component}  from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {experienceList} from '../imageLists';

import ExperiencePaper	from './ExperiencePaper';
export default class Experience extends Component {

  	render() {
  		return (
  			<div className="experience-container">
                {experienceList.map((experience, i) => (
                    <ExperiencePaper
                        key={i}     
                        description_1={experience.description_1}
                        description_2={experience.description_2}
                        description_3={experience.description_3}
                        description_4={experience.description_4}
                        job={experience.job}
                        image={experience.img}
                        title={experience.title}
                    />
                ))}
            </div>
  		)
    }
}
