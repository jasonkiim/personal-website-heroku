import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fading: true,
    };
  }

  componentDidMount() {
    this.time = setTimeout(() => { this.setState({ fading: false }); }, 3000);
  }


  render() {
    return (
      <div className={`${this.state.fading ? 'home-fading' : 'home-faded'}`}>
        <img className="logo" src="./react1.png" alt="asdf" />
      </div>
    );
  }
}
