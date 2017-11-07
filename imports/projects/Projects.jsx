import React, { Component}  from 'react';

import Drawer   from  'material-ui/Drawer';
import AppBar   from  'material-ui/AppBar';
import Paper    from   'material-ui/Paper';

import LeftDrawer      from './LeftDrawer';
import RightDrawer     from './RightDrawer';

export default class Projects extends Component {

  	render() {
        const LeftStyles = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            height: 'calc(100% - 160px)',
            top: 160,
        };

        const RightStyles = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100% - 160px)',
            top: 160,
            margin: 'auto',
            background: 'rgb(55,71,79)'
        };

        return (
            <div className="aboutme-container">
                <Drawer width={'50%'} open={this.props.open} containerStyle={LeftStyles}>
                    <LeftDrawer />
                </Drawer>
                <Drawer width={'50%'} openSecondary={true} open={this.props.open} containerStyle={RightStyles}>
                    <RightDrawer />
                </Drawer>
            </div>
        );
    }
}
