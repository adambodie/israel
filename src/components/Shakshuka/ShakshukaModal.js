import React, { Component } from 'react'
import  Modal  from 'react-modal'
import { connectModal } from 'redux-modal'

const SHAKSHUKA_STYLES = {
	content : {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
}
class MyModal extends Component {
	render() {
		const { show, handleHide, title, image } = this.props
		return (
			<Modal 
				isOpen={show} 
				style={SHAKSHUKA_STYLES}
				appElement={document.getElementById('root')}
				>
					<h2>{ title }</h2>
					<button onClick={handleHide} className='shakshuka-button'>x</button>
					<img className='thumbnail' src={`/assets/photos/IMG_45${image}.JPG`} alt={title}/>

			</Modal>
		)
	}
}

export default class ShakshukaModal extends Component {
	render() {
		const { name } = this.props
		const WrappedMyModal = connectModal({ name })(MyModal)
		return <WrappedMyModal />
	}
}