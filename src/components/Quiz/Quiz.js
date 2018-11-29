import React from 'react';
import { Provider } from '../Context/quiz';
import QuizList from './QuizList';

const Quiz = () => {
		return (
		<Provider>
			<h1 className='pageTitle'>Quiz</h1>
			<QuizList />
		</Provider>
	);
}

export default Quiz;
