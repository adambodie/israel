import React from 'react';
import { Row, Column } from 'react-foundation';
import PrevNext from '../PrevNext';

const JukeboxText = () => {
	return (
		<Row className='display grid-x post'>
			<Column large={8} offsetOnLarge={2}>
				<div className='jukebox-text'>
					<h1>Jukebox!</h1>
					<p>Over the course of our trip, we managed to hear a few songs, mostly on the bus.  From karaoke jams to popular Israeli songs, and of course, Take Me Home Country Roads, there were quite a few songs we heard. Check out the Jukebox to play the most memorable songs of the trip.  FYI, the last song was one from an album I was playing on my iPhone throughout the trip, <em>Pieces of a Man</em> by Mick Jenkins.  I chose this particular song due to the Tel Aviv reference.</p>
					<PrevNext prev={'/farewell'} next={'/epilogue'} />
				</div>
			</Column>
		</Row>
  );
};

export default JukeboxText;
