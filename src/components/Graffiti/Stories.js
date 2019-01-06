import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';

export default class Stories extends Component {

	render() {	
		return (
			<Row className="display grid-x graffiti">
				<Column>
					<h1>Up We Go</h1>
					<img src='https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/banksy.jpg' alt="banksy" />
					<div className='story'>
						<p>This piece of graffiti, featuring a Peter Pan type figure floating away on balloon, is based on graffiti from (probably) the world's most famous graffiti artist, the England-based artist known by the pseudonym Banksy.  Looking at the very upper right hand corner of the building, you'll see another pair of legs.  The moral of this mural, done by Jonathan Kis-Lev, is that he is chasing Banksy.</p>
						<img src='https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/original-banksy.png' alt="banksy"/>
					</div>
				</Column>
				<Column>
					<h1>All the Eyes</h1>
					<div className="story">
						<img src='https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/eyes.jpg' alt="Eyes" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat sodales quam in vehicula. Cras vitae sodales purus, nec tempor diam. Praesent at diam in erat finibus rutrum. Vivamus faucibus nulla a facilisis facilisis. Morbi risus mauris, porta sed tempus ac, euismod eget nisi. Donec auctor metus sed velit ornare interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam non lobortis est.</p>
					</div>
				</Column>
				<Column>
					<h1>Now Do You See?</h1>
					<div className="story">
						<p>The origin of this mural comes from a female graffiti artist who lived in Croatia and walked by numerous Swatsikas on the way to work.  Asking her peers whether they noticed, they did not, which led her to create her piece, consisting of the braille which states "Now Do You See?" Her works became popular, but later realized how blind she had become.  Thus she added this piece in Tel Aviv to remind her of this.</p>
						<img src='https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/braille.jpg' alt="Braille" />
					</div>
				</Column>
			</Row>
		);
	}
};
