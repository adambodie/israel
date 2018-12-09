import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import PhotoList from './PhotoList';
import Quiz from '../Quiz/Quiz';

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
				</Column>
			</Row>
	)
}
};
