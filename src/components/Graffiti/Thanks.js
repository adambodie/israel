import React from 'react'
import { Column } from 'react-foundation'
import { connect } from 'react-redux'
import { pressButton } from '../../store/actions/thanks'

const mapStateToProps = state => {
	return {
		thanksButton: state.thanksButton,
	}
}
const mapDispatchToProps = { pressButton }

const Thanks = ({ thanksButton, pressButton }) => (
	<Column>
		<h1>What does this say?</h1>
		<div className='thanks'>
			<button data-testid='button-top' className='thanks-cover' style={{marginTop: thanksButton.top}} onClick={pressButton}>{thanksButton.text}</button>
			<img id='thanks-image' src='/assets/main/thanks.jpg' alt='thanks' />
		</div>
		<p>As you click on the button, you will see that that this isn't written in Arabic, as some would consider, but is actually a combination of Arabic on the top, and Hebrew on the bottom.  The word intended to be written is Thanks, which is written in Hebrew, Todah.  But the artist wasn't completely correct in the Arabic translation of Thanks, off by the last letter.  Shukrah is the translation of Thanks in Arabic.</p>
	</Column>
)

export default connect(mapStateToProps, mapDispatchToProps)(Thanks)