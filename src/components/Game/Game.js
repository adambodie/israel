import React, { Component} from 'react';
import { Row, Column } from 'react-foundation';
import GamePlayers from './GamePlayers';

export default class Game extends Component {
	constructor(){
		super();
		this.state = {
			result: '',
			playerScore: 0,
			opponentScore: 0,
			playerWin: 0,
			opponentWin: 0,
			draw: 0,
			start: false,
			buttons: [
				{name: 'rock', id: 0},			
				{name: 'paper', id: 1},
				{name: 'scissors', id: 2}
			]
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}
	handleReset() {
		this.setState({
			opponentScore: 0,
			playerScore: 0,
			playerWin: 0,
			opponentWin: 0,
			draw: 0,
			result: '',
			start: false
		})		
	}
	handleClick(e, index) {
		const buttons = this.state.buttons
		const opponentNewScore = Math.floor(Math.random() * 3);
		const playerNewScore = this.state.buttons[index].id;
		let addPlayerWin = this.state.playerWin;
		let addOpponentWin = this.state.opponentWin;
		let addDraw = this.state.draw;
		let newResult = '';
		if (opponentNewScore === playerNewScore) {
			newResult = "It's a Draw";
			addDraw++;
		}  else if 	((opponentNewScore === 2 && playerNewScore === 0) 
					|| (opponentNewScore === 1 && playerNewScore === 2) 
					|| (opponentNewScore === 0 && playerNewScore === 1)) {
			newResult = `${buttons[playerNewScore].name} beats ${buttons[opponentNewScore].name}. Player wins`;
			addPlayerWin++;
			
		} else {
			newResult = `${buttons[opponentNewScore].name} beats ${buttons[playerNewScore].name}. Computer wins`;
			addOpponentWin++;
		}
		this.setState({
			opponentScore: opponentNewScore,
			playerScore: playerNewScore,
			playerWin: addPlayerWin,
			opponentWin: addOpponentWin,
			draw: addDraw,
			result: newResult,
			start: true
		})
  }
	render() {
		return (
			<Row className="display grid-x game">
				<Column large={6} offsetOnLarge={3}>
					<h1>Rock, Paper, Scissors!!!</h1>
					<GamePlayers 
						opponentScore={this.state.opponentScore} 
						playerScore={this.state.playerScore} 
						playerWin={this.state.playerWin} 
						opponentWin={this.state.opponentWin} 
						draw={this.state.draw} 
						start={this.state.start} 
						handleChange={this.handleClick}
						buttons={this.state.buttons}
						result={this.state.result} 
						/>
					<div className='buttons'>
						{this.state.buttons.map((x, index)=> <button className={`button-${x.name}`} key={index} onClick={()=> this.handleClick(this, index)}><img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/${x.name}.png`} alt={x.name}  /></button>)}
						<button className='reset' onClick={()=>this.handleReset()}>Reset</button>
					</div>
				</Column>
			</Row>
		)
	}
}

