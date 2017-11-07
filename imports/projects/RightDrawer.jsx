import React, { Component}  from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

import Paper            from 'material-ui/Paper';
import FontIcon         from 'material-ui/FontIcon'
export default class LeftDrawer extends Component {

  	render() {
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
};

        return (
        <div>
            <GridList
              cols={2}
              cellHeight={350}
              padding={5}
              style={styles.gridList}
            >
                <GridTile
                >
                    <div className="image-paper"> 
                        <img src="/right1.jpg" />
                        <div className="image-paper-overlay">
                          <h2>About Me</h2>
                        </div>
                    </div>
                </GridTile>
                <GridTile
                >
                    <div className="image-paper"> 
                        <img src="/right2.jpg" />
                        <div className="image-paper-overlay">
                          <h2>Experience</h2>
                        </div>
                    </div>
                </GridTile>
                <GridTile
                >
                    <div className="image-paper"> 
                        <img src="/right3.jpg" />
                        <div className="image-paper-overlay">
                          <h2>Projects</h2>
                        </div>
                    </div>
                </GridTile>
                <GridTile
                >
                    <div className="image-paper"> 
                        <img src="/right4.jpg" />
                        <div className="image-paper-overlay">
                          <h2>Contact Me</h2>
                        </div>
                    </div>
                </GridTile>
                <GridTile
                >
                    <div className="image-paper"> 
                        <img src="/right4.jpg" />
                        <div className="image-paper-overlay">
                          <h2>Contact Me</h2>
                        </div>
                    </div>
                </GridTile>
                <GridTile
                >
                    <div className="image-paper"> 
                        <img src="/right4.jpg" />
                        <div className="image-paper-overlay">
                          <h2>Contact Me</h2>
                        </div>
                    </div>
                </GridTile>
                <GridTile
                >
                    <div className="image-paper"> 
                        <img src="/right4.jpg" />
                        <div className="image-paper-overlay">
                          <h2>Contact Me</h2>
                        </div>
                    </div>
                </GridTile>
                <GridTile
                >
                    <div className="image-paper"> 
                        <img src="/right4.jpg" />
                        <div className="image-paper-overlay">
                          <h2>Contact Me</h2>
                        </div>
                    </div>
                </GridTile>

            </GridList>
        </div>
        );
    }
}
