import React, { Component}  from 'react';
import { Consumer } from '../Context/quiz';
import QuizItem from './QuizItem';

export default class QuizList extends Component {
	render() {
		const { begin, end } = this.props;
		return(
			<Consumer>
				{ ({ questions }) => (
				<div className="quiz-cards">
					{questions.map((x, index) =>
							<QuizItem index={index} key={index}/>
					).filter((x, index) => index >= begin && index <= end)}
				</div>)
				}
			</Consumer>
		);
	}
}


