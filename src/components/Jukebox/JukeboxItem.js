import React, { Component } from 'react';

export default class JukeboxItem extends Component {

    constructor(props) {
        super(props);
        this.state = {view: 'question'};
    }

    clickHandler(event) {
        if (this.state.view === 'question') {
            this.setState({view: 'answer'});
        } else {
            this.setState({view: 'question'});
        }
    }

    render() {
        let className = 'flipper';
        if (this.state.view === 'answer') {
            className = className + ' flipped';
        }

        return (
            <div className={className}  >
                <div className='card'>
					<button onClick={this.clickHandler.bind(this)} className="jukebox-button">x</button>
                    <div className='front'>
						<p>{this.props.data.title}</p>                    
					</div>
                    <div className='back'>
						<iframe title={this.props.data.title} src={`https://www.youtube.com/embed/${this.props.data.src}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>													
                    </div>
                </div>
            </div>
        );
    }

};

