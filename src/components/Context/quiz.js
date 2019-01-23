import React, {Component} from 'react';
import { 
	question0, 
	question1, 
	question2, 
	question3, 
	question4, 
	question5, 
	question6, 
	question7, 
	question8, 
	question9, 
	question10, 
	question11, 
	question12,
	question13,
	question14,
	question15,
	question16,
	question17,
	question18,
	question19,
	question20

} from '../../data/quiz';

const QuizContext = React.createContext();

export class Provider extends Component {
	state = {
			questions: [
				{question: question0, answer: 'B. David Ben-Gurion'}, 
				{question: question1, answer: 'C. 1948'},
				{question: question2, answer: 'D. Ottoman'},
				{question: question3, answer: 'B. 7'},
				{question: question4, answer: 'C. Temple Mount'},
				{question: question5, answer: 'D. Theodor Herzl'},
				{question: question6, answer: 'A. Yitzhak Rabin'},
				{question: question7, answer: 'C. 1942'},
				{question: question8, answer: 'A. Mount Herzl'},
				{question: question9, answer: 'B. United Kingdom'},
				{question: question10, answer: 'D. Jordan'},
				{question: question11, answer: 'B. Egypt'},
				{question: question12, answer: 'C. Norway'},
				{question: question13, answer: 'B. 35%'},
				{question: question14, answer: 'A. Herod the Great'},
				{question: question15, answer: 'A. Yes'},
				{question: question16, answer: 'C. Declining Sea Levels after Spa was built'},
				{question: question17, answer: 'B. 1909'},
				{question: question18, answer: 'C. Palestine'},
				{question: question19, answer: 'D. Both A and B'},
				{question: question20, answer: 'B. Jaffa'},
			]
	}		
	
	render() {
		return(
			<QuizContext.Provider value={{questions: this.state.questions}}>
				{this.props.children}
			</QuizContext.Provider>
		)
	}	
}

export const Consumer = QuizContext.Consumer;
