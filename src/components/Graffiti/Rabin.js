import React, { Component } from 'react';
import { Column } from 'react-foundation';
import rabinPhoto from '../../rabin1.jpg';
import rabinPainting from '../../rabin3.jpg';

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
				<Column large={8} offsetOnLarge={2}>
					<div className='rabin'>
						<img id="rabin1" src={rabinPhoto} alt="Rabin"  />
						<img id="rabin2" src={rabinPainting} alt="Rabin" className={this.state.className} onMouseOver={()=>this.hoverOn()} onMouseLeave={()=>this.hoverOff()}/>
					</div>
					<p>This piece of graffiti, as you hover over the image above, shows it is a painting of an actual photograph.  That photograph depicts the exact moment when Prime Minister Yitzhak Rabin was shot.</p>
				</Column>
		);
	}
};
