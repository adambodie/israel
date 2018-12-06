import React, { Component} from 'react';
import { Row, Column } from 'react-foundation';

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
		const opponentNewScore = Math.floor(Math.random() * 3);
		const playerNewScore = this.state.buttons[index].id;
		let addPlayerWin = this.state.playerWin;
		let addOpponentWin = this.state.opponentWin;
		let addDraw = this.state.draw;
		let newResult = '';
		if (opponentNewScore === playerNewScore) {
			newResult = "Tie";
			addDraw++;
		}  else if 	((opponentNewScore === 2 && playerNewScore === 0) 
					|| (opponentNewScore === 1 && playerNewScore === 2) 
					|| (opponentNewScore === 0 && playerNewScore === 1)) {
			newResult = `${this.state.buttons[playerNewScore].name} 
						 beats 
						 ${this.state.buttons[opponentNewScore].name}. 
						 Player wins`;
			addPlayerWin++;
		} else {
			newResult = `${this.state.buttons[opponentNewScore].name} 
						 beats 
						 ${this.state.buttons[playerNewScore].name}.
						 Computer wins`;
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
					{this.state.start ? (
					<div className='result'>
						<div className="flex">
							<div>
								<h3>Player</h3>
								<img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/${this.state.buttons[this.state.playerScore].name}.png`} alt={this.state.buttons[this.state.playerScore].name} />
							</div>
							<div>
								<h3>Computer</h3>
								<img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/${this.state.buttons[this.state.opponentScore].name}.png`} alt={this.state.buttons[this.state.opponentScore].name} />
							</div>
						</div>
							<h4>{this.state.result}</h4>
							<div className="score">
								<div>
									<h4>Player</h4>
									<h4>{this.state.playerWin}</h4>
								</div>
								<div>
									<h4>Draw</h4>
									<h4>{this.state.draw}</h4>
								</div>
								<div>
									<h4>Computer</h4>
									<h4>{this.state.opponentWin}</h4>
								</div>
							</div>
						</div>
						) : (
						<div className='begin'>
							<h2>Press any button to begin</h2>
						</div>
						)
						}				
				<div className='buttons'>
					{this.state.buttons.map((x, index)=> <button key={index} onClick={()=> this.handleClick(this, index)}><img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/${x.name}.png`} alt={x.name}  /></button>)}
					<button onClick={()=>this.handleReset()}>Reset</button>
				</div>
				</Column>
			</Row>
		)
	}
}

