import React, { Component } from 'react';
import { Column } from 'react-foundation';
import Modal from 'react-modal';
import club from '../../27-club.jpg';

const customStyles = {
  content : {
    top                   : '10%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement(document.getElementById('root'));

export default class TwentySevenClub extends Component {
	  
	constructor() {
		super();
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
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	  }
	  
	  openModal(e, index) {
		  const name = this.state.members[index].name;
			this.setState({
				modalIsOpen: true,
				name: name,
			});
	  }

	  closeModal() {
		this.setState({modalIsOpen: false});
	  }
	render() {	
		return (
			<Column large={8} offsetOnLarge={2}>
					<div className="club">
						<img src={club} alt="27 Club" className="club-image"/>
						{this.state.members.map((x, index) => <button key={index} className={`club-cover cover-${x.className}`} onClick={() => this.openModal(this, index)}></button>)};
					</div>
					<p>The 27 Club is an informal club of famous artists who all passed away at the age of 27 years old.  This piece was created by graffiti artist, Kis-Lev, who allegedly painted this at 26 years old.</p>
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Shakshuka Modal"
				>
				  <h2>{this.state.name}</h2>
				  <button className="shakshuka-button" onClick={this.closeModal}>x</button>
				</Modal>
			</Column>
		);
	}
};
