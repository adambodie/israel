import React from 'react'
import { Row, Column } from 'react-foundation'

const CatPost = () => (
	<Row className='display grid-x cat-post'>
		<Column large={6} offsetOnLarge={3}>
			<img src={`/assets/photos/IMG_6294.JPG`} alt={'View from Shefayim'}/>
			<h4>View from Shefayim</h4>
			<p>Though our group all shared our Jewish faith, no matter the level of religion, there were plenty of other things we bonded over.  Aside from the obvious (sightseeing) and the necessities (bathrooms and Wi-Fi), there were the little things which brought joy.  One of those things were cats.  There were lots of cats in Israel.  But why?</p>
			<img src={`/assets/photos/IMG_6296.JPG`} alt={'Shefayim Kibbutz Hotel Courtyard'}/>
			<h4>Shefayim Kibbutz Hotel Courtyard</h4>
			<p>According to the story, Israel once had a mouse problem.  So how did Israel manage to get rid of all of these mice?  By bringing in a whole bunch of cats to take care of the problem.  Whether it be the classic way of solving problems or if Tom & Jerry inspired them, it’s far better to have a bunch of cute cats than some pesky rodent.  Of course, to those who don’t like cats or are allergic might disagree, but at least there are plenty of pictures and gifs to enjoy. Welcome to the Internet!</p>
			<img src={`/assets/photos/IMG_6302.JPG`} alt={'Shefayim Kibbutz Hotel'}/>
			<h4>Shefayim Kibbutz Hotel</h4>
		</Column>
	</Row>
)
export default CatPost
