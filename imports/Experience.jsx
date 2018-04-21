import React, { Component } from 'react'
import { experienceList } from './list'
import ExperienceItem from './ExperienceItem'

export default class Experience extends Component {
    state = {
      fading: true,
      change: true,
    }

    componentDidMount() {
      this.time = setTimeout(() => {
        this.setState({ fading: false });
      }, 100);

      this.time = setTimeout(() => {
        this.setState({ change: false });
      }, 500);
    }

    render() {
        return (
            <div className={`${this.state.fading ? 'general-container-fading' : 'general-container-faded'}`}>
                <div className="experience-container">
                  {experienceList.map((experience, i) => (
                      <ExperienceItem
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
            </div>

        );
    }

}
