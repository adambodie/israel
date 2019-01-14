import React from 'react';
import ScrollArea from 'react-scrollbar';
import JukeboxList from './JukeboxList';

const Jukebox = () => {
  return (
	  <div>
		<div className="jukebox">
			<div className="jukebox-title">
				<h1 data-testid="title-display">Sababa!</h1>
			</div>
			<ScrollArea
				speed={0.8}
				className="area"
				contentClassName="content"
				horizontal={false}
				>
				<JukeboxList />
			</ScrollArea>
			<div className="legs">
				<div className="leg-bottom"></div>
				<div className="leg"></div>
				<div className="leg"></div>
  			</div>
		</div>
		<div className="jukebox-text">
			<h1>Jukebox!</h1>
			<p>Over the course of our trip, we managed to hear a few songs, mostly on the bus.  From karaoke jams to popular Israeli songs, and of course, Take Me Home Country Roads, there were quite a few songs. Check out the Jukebox to play the most memorable songs of the trip.</p>
		</div>
	</div>
  );
};

export default Jukebox;
