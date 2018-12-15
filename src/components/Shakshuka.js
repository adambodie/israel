import React, { Component} from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { Row, Column } from 'react-foundation';
import { shakshuka } from '../data/articles';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement(document.getElementById('root'));

export default class Shakshuka extends Component {
	  constructor() {
		super();

		this.state = {
		  modalIsOpen: false,
		  image: '',
		  eggs: [
			{'class': 'eggOne', 'title': 'McDonalds in Israel', 'image': '35'},
			{'class': 'eggTwo',  'title': 'Kosher Mehadrin', 'image': '37'},
			{'class': 'eggThree',  'title': 'Ahuzat Beit Hakerem', 'image': '38'},
			{'class': 'eggFour',  'title': 'Ahuzat Beit Hakerem', 'image': '39'},
			{'class': 'eggFive',  'title': 'Keres Shopping Mall Square', 'image': '47'}							
		  ]
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	  }

	  openModal(e, index) {
		  const image = this.state.eggs[index].image;
		  const title = this.state.eggs[index].title;
			this.setState({
				modalIsOpen: true,
				image: image,
				title: title
			});
	  }

	  closeModal() {
		this.setState({modalIsOpen: false});
	  }

	render() {
		return (
			<Row className="display grid-x shakshuka">
				<Column large={8} offsetOnLarge={2}>
					<h1>How Not to Enjoy Your Shakshuka</h1>
					<div className="tomato">
						{this.state.eggs.map((x, index) => (
							<div key={index} className={"egg " + x.class} onClick={() => this.openModal(this, index)}></div>
							))
						}
					</div>
					<p><strong>Click on each egg above to view a picture</strong></p>
					<ReactMarkdown source={shakshuka} className="article" />
					<div className="prev-next">
						<Link to={ '/yad-vashem' } className='custom-button'>Prev</Link>
						<Link to={ '/herzl' } className='custom-button'>Next</Link>
					</div>
				</Column>
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Shakshuka Modal"
				>
				  <h2>{this.state.title}</h2>
				  <img className='thumbnail' src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/IMG_45${this.state.image}.JPG`} alt="title"/>
				  <button className="shakshuka-button" onClick={this.closeModal}>x</button>
				</Modal>
		</Row>
		)
	}
}


