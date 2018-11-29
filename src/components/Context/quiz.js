import React, {Component} from 'react';
import { question1, question2, question3, question4 } from '../../data/quiz';

const QuizContext = React.createContext();

export class Provider extends Component {
	state = {
			questions: [
				{question: question1, answer: "B. David Ben-Gurion"}, 
				{question: question2, answer: "C. 1948"},
				{question: question3, answer: "D. Ottoman"},
				{question: question4, answer: "B. 7"},
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
