import React from 'react'
import QuizList from './QuizList'

const Quiz = ({ number, begin, end }) => (
	<React.Fragment>
		<h1 className='pageTitle'>Quiz #{number}</h1>
		<QuizList begin={begin} end={end} />
	</React.Fragment>
)

export default Quiz
