import React, { Component } from 'react'
import { experienceList } from './list'

export default class ExperienceItem extends Component {
    state = {
        fading: true,
        change: true,
    }

    componentDidMount ()
    {
        this.time = setTimeout(_ => {
            this.setState({fading: false})
        },100)

        this.time = setTimeout(_ => {
            this.setState({change: false})
        },500)
    }

    render() {
        return (
            <div className={`${this.state.fading ? 'general-container-fading' : 'general-container-faded'}`}>
                <div className="experience-item">
                  <img src={this.props.image} />
                  {this.props.job}
                  {this.props.title}
                  <div className="bullet-point">
                    {this.props.description_1}
                    {this.props.description_2}
                    {this.props.description_3}
                    {this.props.description_4}
                  </div>
                </div>
            </div>
        );
    }

}
