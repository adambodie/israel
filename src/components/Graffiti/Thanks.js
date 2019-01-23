import React, { Component } from 'react';
import { Column } from 'react-foundation';

export default class Thanks extends Component {
	constructor() {
		super();
		this.state = {
			buttons: [
				{top: 0, count: 0, text: 'Click Me!', id: 0},
				{top: 310, count: 0, text: 'Click Me!', id: 1}
			],
		};
		this.pressButton = this.pressButton.bind(this);
	}
	pressButton(e, index) {
		const newButtons = [...this.state.buttons];
		newButtons[index].count++;
		if (newButtons[1].count % 2 === 1) {
			newButtons[1].text = 'Look up!';
			newButtons[1].top = 210;
		} else {
			newButtons[1].text = 'Click Me!';
			newButtons[1].top = 310;
		}
		if (newButtons[0].count % 2 === 1) {
			newButtons[0].text = 'Look down!';
			newButtons[0].top = 100;
		} else {
			newButtons[0].text = 'Click Me!';
			newButtons[0].top = 0;
		}
		this.setState(prevState =>({ 
			buttons: newButtons 
		}));
	}
	render() {
		return (
			<Column>
				<h1>What does this say?</h1>
				<div className='thanks'>
					<button data-testid='button-top' className='thanks-cover' style={{marginTop: this.state.buttons[0].top}} onClick={()=> this.pressButton(this, 0)}>{this.state.buttons[0].text}</button>
					<img id='thanks-image' src='https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/thanks.jpg' alt='thanks' />
					<button className='thanks-cover' style={{marginTop: this.state.buttons[1].top}} onClick={()=> this.pressButton(this, 1)}>{this.state.buttons[1].text}</button>
				</div>
				<p>As you click on the blocks above and below the image, you will see that that this isn't written in Arabic, as some would consider, but is actually a combination of Arabic on the top, and Hebrew on the bottom.  The word intended to be written is Thanks, which is written in Hebrew, Todah.  But the artist wasn't completely correct in the Arabic translation of Thanks, off by the last letter.  Shukrah is the translation of Thanks in Arabic.</p>
			</Column>
		);
	}
};
