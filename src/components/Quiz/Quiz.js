import React from 'react'
import  QuizProvider  from '../Context/quiz'
import QuizList from './QuizList'

const Quiz = (props) => (
	<QuizProvider>
		<h1 className='pageTitle'>Quiz #{props.number}</h1>
		<QuizList begin={props.begin} end={props.end} />
	</QuizProvider>
)

export default Quiz
