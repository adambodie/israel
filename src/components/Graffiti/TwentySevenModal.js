import React, { Component } from 'react'
import  Modal  from 'react-modal'
import { connectModal } from 'redux-modal'

const TWENTY_SEVEN_STYLES = {
	content : {
		top: '10%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
}
class MyModal extends Component {
	render() {
		const { show, handleHide, name } = this.props
		return (
			<Modal 
				isOpen={show} 
				style={TWENTY_SEVEN_STYLES}
				appElement={document.getElementById('root')}
				>
					<h2>{ name }</h2>
					<button onClick={handleHide} className='shakshuka-button'>x</button>

			</Modal>
		)
	}
}

export default class TwentySevenModal extends Component {
	render() {
		const { name } = this.props
		const WrappedMyModal = connectModal({ name })(MyModal)
		return <WrappedMyModal />
	}
}