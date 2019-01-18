import React, { Component} from 'react';
import { Row, Column } from 'react-foundation';
import axios from 'axios';
import { Link } from "react-router-dom";
import CatPost from './CatPost';
import CatList from './CatList';

export default class Cat extends Component {
	constructor() {
		super();
		this.state = {
			cats: [],
			image: ''
		};
	}
	

	  	
	componentDidMount() {
			axios.get("https://api.giphy.com/v1/gifs/search?api_key=9QkF2zr9JlrtO77ouF5NhuLQ348t4vAJ&q=cat&limit=500")	
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
		const { cats, image } = this.state;
		return (
		<div className="cat">
			<h1>Cats: The True Story</h1>
			<Row className="display grid-x">
				<CatPost />
				<Column large={6} offsetOnLarge={3}>
					<h1>Cats, Cats, Cats!!!</h1>
					<div className="cat-gifs">
					<CatList cats={cats} image={image} />
					</div>
				</Column>
			</Row>			

				<div className="prev-next">
						<Link to={ '/kibbutz' } className='custom-button'>Prev</Link>
						<Link to={ '/jaffa' } className='custom-button'>Next</Link>
					</div>
				
		</div>
		)
	}
}



