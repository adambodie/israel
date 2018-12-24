import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { Link } from "react-router-dom";
import PhotoList from './PhotoList';
import Quiz from '../Quiz/Quiz';
import Map from '../Map';
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
		return (
			<Row className="display grid-x post">
				<Column large={8} offsetOnLarge={2}>
					<h1>{this.props.title}</h1>
					<PhotoList data={this.state.photographs} />
					<ReactMarkdown source={this.props.paragraph} className="article" />
					{this.props.begin >= 0 && (<Quiz begin={this.props.begin} end={this.props.end} number={this.props.number}/>)}
					{this.props.map === true && (<Map locations={this.props.locations} locationName={this.props.locationName} />)}
					<div className="prev-next">
						<Link to={ this.props.prev } className='custom-button'>Prev</Link>
						<Link to={ this.props.next } className='custom-button'>Next</Link>
					</div>
				</Column>
			</Row>
	)
}
};
