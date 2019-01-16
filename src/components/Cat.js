import React, { Component} from 'react';
import { Row, Column } from 'react-foundation';
import Modal from 'react-modal';
import axios from 'axios';
import { Link } from "react-router-dom";

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


export default class Cat extends Component {
	constructor() {
		super();
		this.state = {
			cats: [],
			image: ''
		};
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
			cats: this.shuffle(this.state.cats),
			newModalIsOpen: true,
		}));
	}
	  openModal(e, index) {
		  const image = this.state.cats[index].images.fixed_height.url;
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
	componentDidMount() {
			axios.get("https://api.giphy.com/v1/gifs/search?api_key=9QkF2zr9JlrtO77ouF5NhuLQ348t4vAJ&q=cat&limit=1000")
			
			.then(response => {
				this.setState({
					cats: response.data.data
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	
	}



	render() {
		const { cats } = this.state;
		const shuffleCats = this.shuffle(cats).filter((x, index) => index < 9);
		return (
		<div className="cat">
			<h1>Cats: the True Story</h1>
			<Row className="display grid-x cat-post">
				<Column large={6} offsetOnLarge={3}>
					<img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/IMG_6294.JPG`} alt={'View from Shefayim'}/>
					<h4>View from Shefayim</h4>
					<p>Though our group all shared our Jewish faith, no matter the level of religion, there were plenty of other things we bonded over.  Aside from the obvious (sightseeing) and the necessities (bathrooms and Wi-Fi), there were the little things which brought joy.  One of those things were cats.  There were lots of cats in Israel.  But why?</p>
					<img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/IMG_6296.JPG`} alt={'Shefayim Kibbutz Hotel Courtyard'}/>
					<h4>Shefayim Kibbutz Hotel Courtyard</h4>
					<p>According to the story, Israel once had a mouse problem.  So how did Israel manage to get rid of all of these mice?  By bringing in a whole bunch of cats to take care of the problem.  Whether it be the classic way of solving problems or if Tom & Jerry inspired them, it’s far better to have a bunch of cute cats than some pesky rodent.  Of course, to those who don’t like cats or are allergic might disagree, but at least there are plenty of pictures and gifs to enjoy. Welcome to the Internet!</p>
					<img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/IMG_6302.JPG`} alt={'Shefayim Kibbutz Hotel'}/>
					<h4>Shefayim Kibbutz Hotel</h4>
				</Column>
			</Row>
			<Row className="display grid-x">
				
				<Column large={6} offsetOnLarge={3}>
					<h1>Cats, Cats, Cats!!!</h1>
					<div className="cat-gifs">
					{shuffleCats.map((x, index) => {
						return (
							<div key={index} className="cat-gif">
								<img src={x.images.fixed_height.url} alt="Cat" onClick={() => this.openModal(this, index)}/>
							</div>	
							)	
						}
					)}
					</div>
					<button className="cat-button custom-button" onClick={this.newCats}>See More Cats!</button>
				</Column>
			</Row>			
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
				<div className="prev-next">
						<Link to={ '/kibbutz' } className='custom-button'>Prev</Link>
						<Link to={ '/jaffa' } className='custom-button'>Next</Link>
					</div>
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
		</div>
		)
	}
}



