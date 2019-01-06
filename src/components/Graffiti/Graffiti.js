import React from 'react';
import { Row } from 'react-foundation';
import Rabin from './Rabin.js';
import Thanks from './Thanks.js';
import TwentySevenClub from './TwentySevenClub.js';
import Stories from './Stories.js';

const Graffiti = () => (
	<Row className="display grid-x graffiti">
		<h1>Behind the Graffiti</h1>
		<p>Each piece of graffiti has a story behind it.  As there are lots of graffiti to be found, here you will find the stories of a few selections.</p>
		<Rabin />
		<Thanks />
		<TwentySevenClub />
		<Stories />
	</Row>
)

export default Graffiti;
