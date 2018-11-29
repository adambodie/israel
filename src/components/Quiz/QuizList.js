import React from 'react';
import { Consumer } from '../Context/quiz';
import QuizItem from './QuizItem';

const QuizList = () => {
	return(
		<Consumer>
			{ ({ questions }) => (
			<div className="quiz">
				{questions.map((x, index) => 
					<div key={index}>
						<QuizItem index={index}/>
					</div>
				)}
			</div>)
			}
		</Consumer>
	);
}
export default QuizList;


