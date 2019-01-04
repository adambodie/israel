import React from 'react';
import { Row } from 'react-foundation';
import Rabin from './Rabin.js';
import Thanks from './Thanks.js';
import TwentySevenClub from './TwentySevenClub.js';
import Stories from './Stories.js';

const Graffiti = () => (
	<Row className="display grid-x graffiti">
		<h1>Behind the Graffiti</h1>
		<Rabin />
		<Thanks />
		<TwentySevenClub />
		<Stories />
	</Row>
)

export default Graffiti;
