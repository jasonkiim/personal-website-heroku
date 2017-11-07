import React, { Component}  from 'react';

import Drawer   from  'material-ui/Drawer';
import AppBar   from  'material-ui/AppBar';
import Paper    from   'material-ui/Paper';

export default class Experience extends Component {

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
            overflow: 'hidden',
            height: 'calc(100% - 160px)',
            top: 160,
            margin: 'auto',
            background: 'rgb(55,71,79)'
        };

        return (
            <div className="experience-container">
            </div>
        );
    }
}
