import React from 'react'
import { Row, Column } from 'react-foundation'

const Stories = () => (
	<Row className='display grid-x graffiti'>
		<Column>
			<h1>Up We Go</h1>
			<img src={`/assets/main/banksy.jpg`} alt='banksy' />
			<div className='story'>
				<p>This piece of graffiti, featuring a Peter Pan type figure floating away on balloon, is based on graffiti from (probably) the world's most famous graffiti artist, the England-based artist known by the pseudonym Banksy.  Looking at the very upper right hand corner of the building, you'll see another pair of legs.  The moral of this mural, done by Jonathan Kis-Lev, is that he is chasing Banksy.</p>
				<img src={`/assets/main/original-banksy.png`} alt='banksy'/>
			</div>
		</Column>
		<Column>
			<h1>Now Do You See?</h1>
			<div className='story'>
				<p>The origin of this mural comes from a female graffiti artist who lived in Croatia and walked by numerous Swatsikas on the way to work.  Asking her peers whether they noticed, they did not, which led her to create her piece, consisting of the braille which states 'Now Do You See?' Her works became popular, but later realized how blind she had become.  Thus she added this piece in Tel Aviv to remind her of this.</p>
				<img src={`/assets/main/braille.jpg`} alt='Braille' />
			</div>
		</Column>
	</Row>
)

export default Stories
