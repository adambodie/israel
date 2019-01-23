import React, { Component } from 'react';
import { Column } from 'react-foundation';

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
		return (
			<Column>
				<h1>The Most Important Piece of Graffiti in Tel Aviv</h1>
				<div className='rabin'>
					<img id='rabin1' src='https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/rabin-photo.jpg' alt='Rabin Photograph' />
					<img id='rabin2' src='https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/rabin-painting.jpg' alt='Rabin Painting' className={this.state.className} onMouseOver={()=>this.hoverOn()} onMouseLeave={()=>this.hoverOff()} />
				</div>
				<p>This piece of graffiti, as you hover over the image above, shows it is a painting of an actual photograph.  That photograph depicts the exact moment when Prime Minister Yitzhak Rabin was assassinated in 1995.  When someone attempted to paint over this mural, people got upset and started protesting.  Since then, it has been declared protected.</p>
			</Column>
		);
	}
};
