import React from 'react'
import { QuizConsumer } from '../Context/quiz'
import QuizItem from './QuizItem'

const QuizList = ({ begin, end }) => (
	<QuizConsumer>
		{ ({ questions }) => (
			<div className='quiz-cards'>
				{questions.map((x, index) => <QuizItem index={index} key={index}/>).filter((x, index) => index >= begin && index <= end)}
			</div>
			)
		}
	</QuizConsumer>
)

export default QuizList
