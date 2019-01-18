import React, { Component } from 'react';
import Modal from 'react-modal';
import { Column } from 'react-foundation';
const customStyles = {
  content : {
    top                   : '0%',
    left                  : '0%',
    right                 : '0%',
    bottom                : '0%',
    display				  : 'flex',
    justifyContent		  : 'center',
    alignItems			  : 'center',
    background			  : 'black'
  }
};

const newCustomStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    textAlign             : 'center',
    width				  : '400px',
    height				  : '400px',
    display				  : 'flex',
    justifyContent		  : 'center',
    alignItems			  : 'center',
  }
};



export default class CatList extends Component {
	constructor() {
		super();
		this.state = {
			isModalOpen: false,
			isNewModalOpen: false
		}
		this.shuffle = this.shuffle.bind(this);
		this.newCats = this.newCats.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);		
		this.closeCatModal = this.closeCatModal.bind(this);		
	}	
	shuffle (array) {
		let currentIndex = array.length, temporaryValue, randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		};
		return array;
	}
	newCats() {
		  this.setState(prevState => ({
			cats: this.shuffle(this.props.cats),
			newModalIsOpen: true,
		}));
	}
	  openModal(e, index) {
		  const image = this.props.cats[index].images.fixed_height.url;
			this.setState({
				modalIsOpen: true,
				image: image,
			});
	  }

	  closeModal() {
		this.setState({modalIsOpen: false});
	  }
	  
	  closeCatModal() {
		this.setState({newModalIsOpen: false});
	  }	
	render() {
		const { cats } = this.props;
		return(
		<Column large={6} offsetOnLarge={3}>
			<h1>Cats, Cats, Cats!!!</h1>
			<div className="cat-gifs">
				{this.shuffle(cats).filter((x, index) => index < 9).map((x, index) => {
					return (
						<div key={index} className="cat-gif">
							<img src={x.images.fixed_height.url} alt="Cat" onClick={() => this.openModal(this, index)}/>
						</div>	
							)	
						}
					)}
				</div>
				<button className="cat-button custom-button" onClick={this.newCats}>See More Cats!</button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Cat Modal"
					appElement={document.getElementById('root')}
				>
				  <img className="cat-modal" src={this.state.image} alt="cat"/>
				  <button className="cat-modal-button" onClick={this.closeModal}>x</button>
				</Modal>
				<Modal
					isOpen={this.state.newModalIsOpen}
					onRequestClose={this.newCloseModal}
					style={newCustomStyles}
					contentLabel="Cat Modal"
					appElement={document.getElementById('root')}
				>
				  <h1>New Cats have been loaded</h1>
				  <button className="cat-modal-button" onClick={this.closeCatModal}>x</button>
				</Modal>
			</Column>
		);
	}
}
