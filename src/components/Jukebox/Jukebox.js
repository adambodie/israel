import React from 'react'
import ScrollArea from 'react-scrollbar'
import JukeboxList from './JukeboxList'
import JukeboxText from './JukeboxText'

const Jukebox = () => (
	<React.Fragment>
		<div className='jukebox'>
			<div className='jukebox-title'>
				<h1 data-testid='title-display'>Sababa!</h1>
			</div>
			<ScrollArea
				speed={0.8}
				className='area'
				contentClassName='content'
				horizontal={false}
				>
				<JukeboxList />
			</ScrollArea>
			<div className='legs'>
				<div className='leg-bottom'></div>
				<div className='leg'></div>
				<div className='leg'></div>
			</div>
		</div>
		<JukeboxText />
	</React.Fragment>
)

export default Jukebox
