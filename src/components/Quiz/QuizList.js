import React from 'react'
import QuizItem from './QuizItem'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		quizQuestions: state.quizQuestions,
	}
}
const QuizList = ({ quizQuestions, begin, end }) => (
	<div className='quiz-cards'>
		{quizQuestions.map((quizQuestion, index) => <QuizItem quizQuestion={quizQuestion} key={index}/>)
				  .filter((x, index) => index >= begin && index <= end)}
	</div>
)
export default connect(mapStateToProps) (QuizList)