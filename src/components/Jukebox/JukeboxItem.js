import React, { Component } from 'react';

export default class JukeboxItem extends Component {

    constructor(props) {
        super(props);
        this.state = {view: 'front'};
    }

    clickHandler(event) {
        if (this.state.view === 'front') {
            this.setState({view: 'back'});
        } else {
            this.setState({view: 'front'});
        }
    }

    render() {
        let className = 'flipper';
        if (this.state.view === 'back') {
            className = className + ' flipped';
        }
        if (this.state.view === 'front-complete') {
            className = className + ' flipped-complete';
        }
        const {title, src } = this.props.data;
        return (
            <div className={className}  >
                <div className='card'>
					<button onClick={this.clickHandler.bind(this)} className="jukebox-button">o</button>
                    <div className='front'>
						<p>{title}</p>
					</div>
                    <div className='back'>
						<iframe title={title} src={`https://www.youtube.com/embed/${src}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>													
                    </div>
                </div>
            </div>
        );
    }
};

