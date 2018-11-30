import React from 'react';
import { Row, Column } from 'react-foundation';
import { Provider } from '../Context/quiz';
import QuizList from './QuizList';

const Quiz = (props) => {
		return (
		<Provider>
			<Row className="display grid-x">
				<Column large={10} offsetOnLarge={1}>			
					<h1 className='pageTitle'>Quiz</h1>
					<QuizList begin={props.begin} end={props.end} />
				</Column>
			</Row>
		</Provider>
	);
}

export default Quiz;
