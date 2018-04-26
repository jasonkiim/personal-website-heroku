import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

export default class ExperiencePaper extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }


    handleOpen = () => {
      this.setState({ open: true });
    };

    handleClose = () => {
      this.setState({ open: false });
    };


    render() {
      const customDialogStyle = {
        width: '100%',
        maxWidth: '700px',
        padding: '40px',
      };

      const actions = [
        <FlatButton
          label="Close"
          primary={true}
          onClick={this.handleClose}
        />
      ];
      return (
        <React.Fragment>
          <Paper
            zDepth={1}
            className="exp-image-paper"
            onClick={this.handleOpen}
          >
            <div className="bg">
              <img src={this.props.image} alt="asdfasd" />
              <div className="overlay">
                <h2>{this.props.title}</h2>
              </div>
              <Dialog
                contentStyle={customDialogStyle}
                title={this.props.job}
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                <p className="job-description">
                  {this.props.description_1} <br /><br />
                  {this.props.description_2} <br /><br />
                  {this.props.description_3} <br /><br />
                  {this.props.description_4}
                </p>
              </Dialog>
            </div>
          </Paper>
        </React.Fragment>
      );
    }
}
