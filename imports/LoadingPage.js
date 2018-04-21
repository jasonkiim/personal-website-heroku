import React, { Component } from 'react';


export default class LoadingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      fading: true,
      change: true,
      loadingFading: true,
    };
  }

  componentDidMount() {
    this.time = setTimeout(() => { this.setState({ loadingFading: false }); }, 100);
    this.time = setTimeout(() => {
      for (let index = 0; index < 300; index += 1) {
        this.setState({ width: this.state.width + 1 });
      }
    }, 1000);

    this.time = setTimeout(() => { this.setState({ change: false }); }, 4000);
    this.time = setTimeout(() => { this.setState({ fading: false }); }, 3000);
  }


  render() {
    return (
      <React.Fragment>
        <div className={`${this.state.loadingFading ? 'stepper-main-fading' : 'stepper-main-faded'}`}>
          <img className={`${this.state.change ? 'logo' : 'logo-faded'}`} src="./logoBlue.png" alt="asdf" />
          <div className="stepper-bar" style={{ width: `${this.state.width}px`, maxWidth: '100%' }} id={`${this.state.change ? '' : 'stepper-faded'}`} />
        </div>
        <div className={`${this.state.fading ? 'home-fading' : 'home-faded'}`}>
          <img className="logo" src="./logoBlack.png" alt="Asdasdf" />
        </div>
      </React.Fragment>
    );
  }
}
