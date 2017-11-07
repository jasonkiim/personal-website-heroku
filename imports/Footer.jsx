import React, { Component}  from 'react';

import IconButton from 'material-ui/IconButton';

export default class Footer extends Component {

    render() {
        return (
        <div>
            <div className="footer-container">
                <div className="description-text-field">
                    <p className="description" style={{color: 'white'}}>
                        Thank you for visiting this project page. If you have any recommendations for music,
                        please shoot me an email at <span className="bold-text"> dmdwn2696@gmail.com </span> 
                        Cheers!
                    </p>
                    <br/>
                    <p style={{'textAlign':'center', color: 'white'}} >
                        Shoutout to <span className="bold-text"> YouTube </span> for the <i className="em em-musical_note"></i>
                        and <span className="bold-text"> Microsoft </span> for the <i className="em em-smile"></i>
                        <br/>
                        Made with love by yours truly, <span className="bold-text"> Jason Kim </span>
                    </p>
                </div>
            </div>
        </div>
        );
    }
}
