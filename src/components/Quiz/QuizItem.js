import React from 'react'
import ReactMarkdown from 'react-markdown'

const QuizItem = ({ quizQuestion }) => (
	<div className='quiz-card'>
		<div className='question'>
			<ReactMarkdown source={quizQuestion.question}/>
		</div>
		<div className='answer'>
			<h1>{quizQuestion.answer}</h1> 
		</div>
	</div>
)
export default QuizItem


