//Importing components from npm libraries
import React            from 'react';

//Importing MaterialUI component(s)
import Dialog           from 'material-ui/Dialog';
import FlatButton       from 'material-ui/FlatButton';
import RaisedButton     from 'material-ui/RaisedButton';
import Paper            from 'material-ui/Paper';



export default class ProjectPaper extends React.Component {
    state = {
        open: false,
    }

      handleOpen = () => {
        this.setState({open: true});
      };

      handleClose = () => {
        this.setState({open: false});
      };


    render() {
        const customPaperStyle = {
            height: 200,
            width: 300,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };

        const customDialogStyle ={
            width: '100%',
            maxWidth: '700px',
            padding: '40px'
        };

        const actions = [
          <FlatButton
            label="Close"
            primary={true}
            onClick={this.handleClose}
          />
        ];
        return (
            <div style={{display: 'inline-block'}}>
                <Paper 
                    style={customPaperStyle} 
                    zDepth={1} 
                    className="image-paper"
                    onClick={this.handleOpen}
                >
                    <div className="bg">
                        <img src={this.props.image}/>
                        <div className="overlay">
                          <h2 style ={{paddingTop: '25%'}}>{this.props.title}</h2>
                        </div>
                        <Dialog
                          contentStyle={customDialogStyle}
                          title={this.props.dialogTitle}
                          actions={actions}
                          modal={false}
                          open={this.state.open}
                          onRequestClose={this.handleClose}
                        >
                        <p className="project-description">
                            <span style={{fontWeight: '800'}}>{this.props.technologies}</span>
                            <br/><br/><br/>
                            {this.props.description}
                        </p>
                        
                        </Dialog>
                    </div>
                </Paper>
            </div>
        );
    }
}
