import React, { Component } from 'react';
import { Column } from 'react-foundation';
import thanks from '../../thanks.jpg';

export default class Thanks extends Component {
	  
	constructor() {
		super();
		this.state = {
			buttons: [
				{left: 0, count: 0, text: 'Click Me!', id: 0},			
				{left: 0, count: 0, text: 'Click Me!', id: 1}
			],
		};
		this.pressButton = this.pressButton.bind(this);
	  }
	pressButton(e, index) {
		const newButtons = [...this.state.buttons];
		newButtons[index].count % 2 === 0 ? newButtons[index].left = 420 : newButtons[index].left = 0;
		newButtons[index].count++;
		if (newButtons[1].count % 2 === 1) {
			newButtons[1].text = 'Look up!'	
		} else {
			newButtons[1].text = 'Click Me!'	
		}
		if (newButtons[0].count % 2 === 1) {
			newButtons[0].text = 'Look down!'	
		} else {
			newButtons[0].text = 'Click Me!'	
		}			
		this.setState(prevState =>({ 
			buttons: newButtons 
		}));
	}
	render() {	
		return (
			<Column large={8} offsetOnLarge={2}>
				<div className='thanks'>
					<div>
						{this.state.buttons.map((x, index)=> <button key={index} className='thanks-cover' style={{marginLeft: x.left}} onClick={()=> this.pressButton(this, index)}>{x.text}</button>)}
					</div>
					<img id="thanks-image" src={thanks} alt="thanks" />
				</div>
				<p>As you hover over the blocks to the left of this image, you will see that that this isn't written in Arabic, as some would consider, but is actually a combination of Arabic on the top, and Hebrew on the bottom.  The word intended to be written is Thanks, which is written in Hebrew, Todah.  But the artist wasn't completely correct in the Arabic translation of Thanks, off by the last letter.  Shukrah is the translation of Thanks in Arabic.</p>
			</Column>				
		);
	}
};
