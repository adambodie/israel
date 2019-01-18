import React from 'react';
import ScrollArea from 'react-scrollbar';
import JukeboxHeader from './JukeboxHeader';
import JukeboxLegs from './JukeboxLegs';
import JukeboxList from './JukeboxList';
import JukeboxText from './JukeboxText';

const Jukebox = () => {
  return (
	  <div>
		<div className="jukebox">
			<JukeboxHeader />
			<ScrollArea
				speed={0.8}
				className="area"
				contentClassName="content"
				horizontal={false}
				>
				<JukeboxList />
			</ScrollArea>
			<JukeboxLegs />
		</div>
		<JukeboxText />
	</div>
  );
};

export default Jukebox;
