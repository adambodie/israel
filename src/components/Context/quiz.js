import React, {Component} from 'react';
import { question0, question1, question2, question3 } from '../../data/quiz';

const QuizContext = React.createContext();

export class Provider extends Component {
	state = {
			questions: [
				{question: question0, answer: "B. David Ben-Gurion"}, 
				{question: question1, answer: "C. 1948"},
				{question: question2, answer: "D. Ottoman"},
				{question: question3, answer: "B. 7"},
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
