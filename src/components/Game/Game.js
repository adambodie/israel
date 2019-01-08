import React, { Component} from 'react';
import { Row, Column } from 'react-foundation';
import GamePlayers from './GamePlayers';

// p = player, o = opponent
export default class Game extends Component {
	constructor(){
		super();
		this.state = {
			result: '',
			pScore: 0,
			pClassName: '',
			oScore: 0,
			oClassName: '',
			pWin: 0,
			oWin: 0,
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
			pScore: 0,
			pClassName: '',
			pWin: 0,
			oScore: 0,			
			oWin: 0,
			oClassName: '',
			draw: 0,
			result: '',
			start: false
		})		
	}
	

	handleClick(e, index) {
		const buttons = this.state.buttons;
		const oNewScore = Math.floor(Math.random() * 3);
		const pNewScore = buttons[index].id;
		let pNewWin = this.state.pWin;
		let pNewClassName = this.state.pClassName;
		pNewClassName = '';
		let oNewClassName = this.state.oClassName;
		oNewClassName = '';
		let oNewWin = this.state.oWin;
		let addDraw = this.state.draw;
		let newResult = '';
		if (oNewScore === pNewScore) {
			newResult = "It's a Draw";
			addDraw++;
		}  else if 	((oNewScore === 2 && pNewScore === 0) 
					|| (oNewScore === 1 && pNewScore === 2) 
					|| (oNewScore === 0 && pNewScore === 1)) {
			newResult = `Player wins`;
			pNewClassName = 'player-pick';
			oNewClassName = 'loss';
			pNewWin++;
			
		} else {
			newResult = `Computer wins`;
			oNewWin++;
			oNewClassName = 'computer-pick';
			pNewClassName = 'loss';
		}
		this.setState({
			pScore: pNewScore,
			pClassName: pNewClassName,
			pWin: pNewWin,
			oScore: oNewScore,
			oClassName: oNewClassName,
			oWin: oNewWin,
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
						pScore={this.state.pScore} 
						pClassName={this.state.pClassName} 
						pWin={this.state.pWin}
						oScore={this.state.oScore} 
						oClassName={this.state.oClassName} 						 
						oWin={this.state.oWin} 
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

