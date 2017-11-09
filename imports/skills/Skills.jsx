import React, { Component}  from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {skillList} from '../imageLists';
import { CSSTransitionGroup } from 'react-transition-group'

import SkillsImage from './SkillsImage';

export default class Skills extends Component {

  	render() {
  		return (

  			<div className="skills-container">

                {skillList.map((skill, i) => (
                    <SkillsImage
                        key={i}                       
                        image={skill.img}
                        title={skill.title}
                    />
                ))}
            </div>
  		)
    }
}
