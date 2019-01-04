import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import banksy from '../../banksy.jpg';
import originalBanksy from '../../original-banksy.png';
import whore from '../../whore.jpg';
import eyes from '../../eyes.jpg';
import braille from '../../braille.jpg';

export default class Stories extends Component {

	render() {	
		return (
			<Row className="display grid-x graffiti">
				<Column large={8} offsetOnLarge={2}>
					<img src={banksy} alt="banksy" />
					<p>This piece of graffiti, featuring a Peter Pan type figure floating away on balloon, is based on graffiti from probably the world's most famous graffiti artist, simply known as Banksy.  Looking at the very upper right hand corner, you'll see another pair of legs.  This piece is stating that the artist is chasing Banksy.</p>
					<img src={originalBanksy} alt="banksy" />
				</Column>
				<Column large={8} offsetOnLarge={2}>
					<img src={eyes} alt="Eyes" />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat sodales quam in vehicula. Cras vitae sodales purus, nec tempor diam. Praesent at diam in erat finibus rutrum. Vivamus faucibus nulla a facilisis facilisis. Morbi risus mauris, porta sed tempus ac, euismod eget nisi. Donec auctor metus sed velit ornare interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam non lobortis est.</p>
				</Column>
				<Column large={8} offsetOnLarge={2}>
					<img src={whore} alt="Whore" />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat sodales quam in vehicula. Cras vitae sodales purus, nec tempor diam. Praesent at diam in erat finibus rutrum. Vivamus faucibus nulla a facilisis facilisis. Morbi risus mauris, porta sed tempus ac, euismod eget nisi. Donec auctor metus sed velit ornare interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam non lobortis est.</p>
				</Column>
				<Column large={8} offsetOnLarge={2}>
					<img src={braille} alt="Braille" />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat sodales quam in vehicula. Cras vitae sodales purus, nec tempor diam. Praesent at diam in erat finibus rutrum. Vivamus faucibus nulla a facilisis facilisis. Morbi risus mauris, porta sed tempus ac, euismod eget nisi. Donec auctor metus sed velit ornare interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam non lobortis est.</p>
				</Column>
			</Row>
		);
	}
};
