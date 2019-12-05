import React from 'react'
import ReactMarkdown from 'react-markdown'
import { shakshuka } from '../../data/articles'
import PrevNext from '../PrevNext'

const ShakshukaText = () => (
	<React.Fragment>
		<p><strong>Click on each egg above to view a picture</strong></p>
		<ReactMarkdown source={shakshuka} className='article' />
		<PrevNext prev={'/yad-vashem'} next={'/herzl'} />
	</React.Fragment>
)

export default ShakshukaText
