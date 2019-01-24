import React, { Component } from 'react';
import { Column } from 'react-foundation';
import { mainLink } from '../../data/articles';

export default class Rabin extends Component {
	constructor() {
		super();
		this.state = {
			className: ''
		};
		this.hoverOn = this.hoverOn.bind(this);
		this.hoverOff = this.hoverOff.bind(this);
	  }
	hoverOn() {
		this.setState(prevState =>({ 
			className: 'hoverOver' 
		}));
	}
	hoverOff() {
		this.setState(prevState =>({ 
			className: '' 
		}));
	}
	render() {
		const { className } = this.state;
		return (
			<Column>
				<h1>The Most Important Piece of Graffiti in Tel Aviv</h1>
				<div className='rabin'>
					<img id='rabin1' src={`${mainLink}/rabin-photo.jpg`} alt='Rabin Photograph' />
					<img id='rabin2' src={`${mainLink}/rabin-painting.jpg`} alt='Rabin Painting' className={className} onMouseOver={()=>this.hoverOn()} onMouseLeave={()=>this.hoverOff()} />
				</div>
				<p>This piece of graffiti, as you hover over the image above, shows it is a painting of an actual photograph.  That photograph depicts the exact moment when Prime Minister Yitzhak Rabin was assassinated in 1995.  When someone attempted to paint over this mural, people got upset and started protesting.  Since then, it has been declared protected.</p>
			</Column>
		);
	}
};
