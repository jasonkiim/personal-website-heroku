import React, { Component } from 'react';


export default class Home extends Component {

    state = {
        fading: true
    };


    componentDidMount ()
    {
        this.time = setTimeout(_ => {
            this.setState({fading: false});
        },3000);
    }


    render() {
        return (
            <div className={`${this.state.fading ? 'home-fading' : 'home-faded'}`}>
                <img className="logo"src="./react1.png"/>
            </div>

        );
    }
}
