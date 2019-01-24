import React, { Component} from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Row, Column } from 'react-foundation';
import { shakshuka } from '../data/articles';
import { mainLink } from '../data/articles';
import { imageLink } from '../data/articles';

const customStyles = {
	content : {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

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
		const { eggs } = this.state;
		const image = eggs[index].image;
		const title = eggs[index].title;
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
		const { eggs, title, image, modalIsOpen } = this.state;
		return (
			<Row className='display grid-x shakshuka'>
				<Column large={8} offsetOnLarge={2}>
					<h1>How Not to Enjoy Your Shakshuka</h1>
					<img className='fork' src={`${mainLink}/fork.gif`} alt='fork'/>
					<div className='tomato'>
						{eggs.map((x, index) => (
							<div key={index} data-testid={'egg ' + x.class} className={'egg ' + x.class} onClick={() => this.openModal(this, index)}></div>
							))
						}
					</div>
					<p><strong>Click on each egg above to view a picture</strong></p>
					<ReactMarkdown source={shakshuka} className='article' />
					<div className='prev-next'>
						<Link to={ '/yad-vashem' } className='custom-button'>Prev</Link>
						<Link to={ '/herzl' } className='custom-button'>Next</Link>
					</div>
				</Column>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel='Shakshuka Modal'
					appElement={document.getElementById('root')}
				>
					<h2>{title}</h2>
					<img className='thumbnail' src={`${imageLink}/IMG_45${image}.JPG`} alt='title'/>
					<button className='shakshuka-button' onClick={this.closeModal}>x</button>
				</Modal>
		</Row>
		)
	}
}


