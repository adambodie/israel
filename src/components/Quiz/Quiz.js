import React from 'react';
import { Provider } from '../Context/quiz';
import QuizList from './QuizList';

const Quiz = (props) => {
		return (
		<Provider>		
			<h1 className='pageTitle'>Quiz #{props.number}</h1>
			<QuizList begin={props.begin} end={props.end} />
		</Provider>
	);
}

export default Quiz;
