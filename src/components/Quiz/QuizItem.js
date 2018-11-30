import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Consumer } from '../Context/quiz';

export default class QuizItem extends Component {
	static propTypes = {
		index: PropTypes.number.isRequired,
	}
	render(){	
		const { index } = this.props;
		return (
			<Consumer>
				{ ({ questions }) => (
					<div className="card">
						<div className="question">
							<ReactMarkdown source={questions[index].question}/>
						</div>
						<div className="answer">
							<h1>{questions[index].answer}</h1> 
						</div>
					</div>
				)
			}
			</Consumer>	
		)
	}
};


