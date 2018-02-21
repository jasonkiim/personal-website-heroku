import React, { Component } from 'react';


export default class LoadingPage extends Component {

    state = {
        width: 0,
        fading: true,
        change: true,
    };


    componentDidMount ()
    {
        this.time = setTimeout(_ => {
            this.setState({fading: false});
        },100);

        this.time = setTimeout(_ => {

            for (let index = 0; index < 300; index++)
            {
                this.setState({width: this.state.width+1});
            }
        }, 1000);

        this.time = setTimeout(_ => {
            this.setState({change: false});
        }, 5000);

    }


    render() {
        return (
            <div className={`${this.state.fading ? 'stepper-main-fading' : 'stepper-main-faded'}`}>
            <img className="logo"src="./react.png"/>
                <div className="stepper-bar" style={{width: `${this.state.width}px` , maxWidth: '100%'}} id={`${this.state.change ? '' : 'stepper-faded'}`}></div>
            </div>

        );
    }
}
