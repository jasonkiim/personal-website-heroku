//Importing components from npm libraries
import React            from 'react';

//Importing MaterialUI component(s)
import Paper            from 'material-ui/Paper';


export default class SkillsImage extends React.Component {

    render() {
        const customPaperStyle = {
            height: 200,
            width: 200,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };

        return (
            <div className="image">
                <img className="image-paper" src={this.props.image}/>
                <h5>{this.props.title}</h5>
            </div>
        );
    }
}
