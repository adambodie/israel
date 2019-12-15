import React from 'react'
import ReactMarkdown from 'react-markdown'
import PrevNext from '../PrevNext'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		shakshuka: state.shakshuka,
	}
}

const ShakshukaText = ({ shakshuka }) => (
	<React.Fragment>
		<p><strong>Click on each egg above to view a picture</strong></p>
		<ReactMarkdown source={shakshuka} className='article' />
		<PrevNext prev={'/yad-vashem'} next={'/herzl'} />
	</React.Fragment>
)

export default connect(mapStateToProps) (ShakshukaText)
