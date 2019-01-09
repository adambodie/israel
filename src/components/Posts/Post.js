import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { Link } from "react-router-dom";
import PhotoList from './PhotoList';
import Quiz from '../Quiz/Quiz';
import Map from '../Map';
import Graffiti from '../Graffiti/Graffiti';
export default class Post extends Component {

	constructor() {
		super();
		this.state = {
			photographs: []
		};
	}
	componentDidMount() {
		axios.get(this.props.data)
			.then(response => {
				this.setState({
					photographs: response.data
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	}
	render() {
		const { title, paragraph, link, begin, end, number, map, locations, locationName, graffiti, prev, next } = this.props;
		const { photographs } = this.state;
		return (
			<Row className="display grid-x post">
				<Column large={8} offsetOnLarge={2}>
					<h1>{title}</h1>
					<PhotoList data={photographs} />
					<ReactMarkdown source={paragraph} className={`article article-${link}`} />
					{begin >= 0 && (<Quiz begin={begin} end={end} number={number}/>)}
					{map === true && (<Map locations={locations} locationName={locationName} />)}
					{graffiti === true && (<Graffiti />)}
					<div className="prev-next">
						<Link to={ prev } className='custom-button'>Prev</Link>
						<Link to={ next } className='custom-button'>Next</Link>
					</div>
				</Column>
			</Row>
	)
}
};
