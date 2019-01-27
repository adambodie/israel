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
	getMobileOperatingSystem() {
		const userAgent = navigator.userAgent || navigator.vendor || window.opera;
		  // Windows Phone must come first because its UA also contains "Android"
		  if (/windows phone/i.test(userAgent)) {
			  return "Windows Phone";
		  }
		  if (/android/i.test(userAgent)) {
			  return "Android";
		  }	  
		  // iOS detection 
		  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			  return "iOS";
		  }	  
		  return "unknown";
	  }

    render() {
		let className = 'flipper';
		let testName = 'front-view';
		if (this.getMobileOperatingSystem() !== 'unknown') {
			className = className + ' flipped';
		}
		if (this.state.view === 'back') {
			className = className + ' flipped';
			testName = 'back-view';

		}
		const { title, src } = this.props.data;
		return (
			<div className={className} data-testid={testName} >
				<div className='card'>
					{ this.getMobileOperatingSystem() === 'unknown' && (
						<React.Fragment>
							<button onClick={this.clickHandler.bind(this)} className="jukebox-button">o</button>
							<div className='front'>
								<p>{title}</p>
							</div>
						</React.Fragment>
					)}
					<div className='back'>
						<iframe title={title} src={`https://www.youtube.com/embed/${src}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>													
					</div>
				</div>
			</div>
		);
	}
};

