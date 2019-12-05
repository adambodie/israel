import React, { Component } from 'react'
import { Column } from 'react-foundation'
import Modal from 'react-modal'

const customStyles = {
	content : {
		top: '10%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
}

export default class TwentySevenClub extends Component {  
	constructor() {
		super()
		this.state = {
			members: [
				{name: 'Brian Jones', className: 'one'},
				{name: 'Jimi Hendrix', className: 'two'},
				{name: 'Janis Joplin', className: 'three'},
				{name: 'Jim Morrison', className: 'four'},
				{name: 'Basquiat', className: 'five'},
				{name: 'Kurt Cobain', className: 'six'},
				{name: 'Amy Winehouse', className: 'seven'},
				{name: 'Kis Lev?', className: 'eight'},
			]
		}
		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
	}  
	openModal(e, index) {
		const name = this.state.members[index].name
		this.setState({
			modalIsOpen: true,
			name: name,
		})
	}
	closeModal() {
		this.setState({modalIsOpen: false})
	}
	render() {
		const { members, name } = this.state
		return (
			<Column>
				<h1>The 27 Club</h1>
				<div className='club'>
					<img src='/assets/main/27-club.jpg' alt='27 Club' className='club-image'/>
					{members.map((x, index) => <button key={index} data-testid={`club-cover cover-${x.className}`} className={`club-cover cover-${x.className}`} onClick={() => this.openModal(this, index)}></button>)}
				</div>
				<p>The 27 Club is an informal club of famous artists who all passed away at the age of 27 years old.  Click on each person to see which famous artist is depicted.  The last person on the right is the creator of the mural, graffiti artist Jonathan Kis-Lev, who came up with the idea of this mural at 26 years old, fearing he'd join the club.  There are rumors regarding why his face is covered in pink paint and who covered it in pink. Kis-Lev, with the help of other artists, painted this within two days, with the use of the crane they rented.  In order to avoid being caught, they completed the mural on Shabbat, claiming a permit, to keep police from calling to check on the permit they didn't have.</p>
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel='Twenty Seven Club Modal'
					appElement={document.getElementById('root')}
				>
					<h2>{name}</h2>
					<button className='shakshuka-button' onClick={this.closeModal}>x</button>
				</Modal>
			</Column>
		)
	}
}
