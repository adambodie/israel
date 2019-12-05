import React, { Component } from 'react'
import Modal from 'react-modal'
import { Column } from 'react-foundation'


const newCatStyles = {
	content : {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		textAlign: 'center',
		width: '300px',
		height: '200px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
}

export default class CatList extends Component {
	constructor() {
		super()
		this.state = {
			isNewModalOpen: false
		}
		this.shuffle = this.shuffle.bind(this)
		this.newCats = this.newCats.bind(this)
		this.closeCatModal = this.closeCatModal.bind(this)
	}
	shuffle (array) {
		let currentIndex = array.length, temporaryValue, randomIndex
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex -= 1
			// And swap it with the current element.
			temporaryValue = array[currentIndex]
			array[currentIndex] = array[randomIndex]
			array[randomIndex] = temporaryValue
		}
		return array
	}
	newCats() {
		  this.setState(prevState => ({
			cats: this.shuffle(this.props.cats),
			newModalIsOpen: true,
		}))
	} 
	closeCatModal() {
		this.setState({newModalIsOpen: false})
	}
	render() {
		const { cats } = this.props
		return (
			<Column large={6} offsetOnLarge={3}>
				<h1>Cats, Cats, Cats!!!</h1>
				<p>Enjoy the Cat gifs below, or click Refresh to load new gifs</p>
				<div className='cat-gifs'>
					{this.shuffle(cats).filter((x, index) => index < 9).map((x, index) => {
						return (
							<div key={index} className='cat-gif'>
								<img src={x.images.fixed_height.url} alt='Cat'/>
							</div>
							)
						}
					)}
				</div>
				<button className='cat-button custom-button' onClick={this.newCats}>Refresh</button>
				<Modal
					isOpen={this.state.newModalIsOpen}
					onRequestClose={this.newCloseModal}
					style={newCatStyles}
					contentLabel='Cat Modal'
					appElement={document.getElementById('root')}
				>
					<h3>New Cats have been loaded</h3>
					<button className='cat-modal-button' onClick={this.closeCatModal}>x</button>
				</Modal>
			</Column>
		)
	}
}
