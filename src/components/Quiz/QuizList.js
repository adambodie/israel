import React, { Component}  from 'react';
import { Consumer } from '../Context/quiz';
import QuizItem from './QuizItem';

export default class QuizList extends Component {
	render() {
		const { begin, end } = this.props;
		return(
			<Consumer>
				{ ({ questions }) => (
				<div className="quiz">
					{questions.map((x, index) =>
						<div key={index}>
							<QuizItem index={index}/>
						</div>				
					).filter((x, index) => index >= begin && index <= end)}
				</div>)
				}
			</Consumer>
		);
	}
}


