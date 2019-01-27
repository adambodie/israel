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
		let testName = 'front-view';
		if (this.state.view === 'back') {
			className = className + ' flipped';
			testName = 'back-view';

		}
		const { title, src } = this.props.data;
		return (
			<div className={className} data-testid={testName} >
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

