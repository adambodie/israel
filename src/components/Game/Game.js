import React, { Component} from 'react';
import { Row, Column } from 'react-foundation';
import GamePlayers from './GamePlayers';
import { Link } from "react-router-dom";

export default class Game extends Component {
	constructor(){
		super();
		this.state = {
			result: '',
			draw: 0,
			start: false,
			buttons: [
				{name: 'rock', id: 0},			
				{name: 'paper', id: 1},
				{name: 'scissors', id: 2}
			],
			players: [
				{name: 'Player', score: 0, win: 0, className: ''},
				{name: 'Computer', score: 0, win: 0, className: ''}
			]
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}
	handleReset() {
		const newPlayers = [
				{name: 'Player', score: 0, win: 0, className: ''},
				{name: 'Computer', score: 0, win: 0, className: ''}
			];
		this.setState({
			players: newPlayers,
			draw: 0,
			result: '',
			start: false
		})		
	}

	handleClick(e, index) {
		const newPlayers = [...this.state.players];
		const { buttons, draw } = this.state;
		newPlayers[1].score = Math.floor(Math.random() * 3);
		newPlayers[0].score = buttons[index].id;
		let addDraw = draw;
		let newResult = '';
		if (newPlayers[0].score === newPlayers[1].score) {
			newResult = "It's a Draw";
			newPlayers[0].className = 'player-draw';
			newPlayers[1].className = 'computer-draw';			
			addDraw++;
		}  else if 	((newPlayers[1].score === 2 && newPlayers[0].score === 0) 
					|| (newPlayers[1].score === 1 && newPlayers[0].score === 2) 
					|| (newPlayers[1].score === 0 && newPlayers[0].score === 1)) {
			newResult = `Player wins`;
			newPlayers[0].className = 'player-pick';
			newPlayers[1].className = 'loss';
			newPlayers[0].win++;
			
		} else {
			newResult = `Computer wins`;
			newPlayers[1].win++;
			newPlayers[1].className = 'computer-pick';
			newPlayers[0].className = 'loss';
		}
		this.setState({
			players: newPlayers,
			draw: addDraw,
			result: newResult,
			start: true
		})
  }
	render() {
		const { buttons, players, draw, start, result } = this.state;
		return (
		<div>
			<Row className="display grid-x game">
				<Column large={6} offsetOnLarge={3}>
					<h1>Rock, Paper, Scissors!!!</h1>
					<GamePlayers 
						players={players} 
						draw={draw} 
						start={start} 
						handleChange={this.handleClick}
						buttons={buttons}
						result={result} 
						/>
					<div className='buttons'>
						{buttons.map((x, index)=> <button className={`button-${x.name}`} key={index} onClick={()=> this.handleClick(this, index)}><img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/${x.name}.png`} alt={x.name}  /></button>)}
						<button className='reset' onClick={()=>this.handleReset()}>Reset</button>
					</div>
				</Column>
			</Row>
			<Row className="display grid-x game-text">
				<Column large={6} offsetOnLarge={3}>
					<h1>The Rock Paper Scissors Episode</h1>
					<p>Rock, Paper, Scissors.  A classic game of chance where two people face off and select either Rock, Paper or Scissors.  You all know the rules:  Rock smashes Scissors.  Scissors cuts Paper.  Paper covers Rock.  You either win, you lose, or you tie.  So what does this have to do with the trip?</p>
					<p>Our first activity for the evening, for some reason, was to challenge someone to Rock, Paper, Scissors, with the loser cheering the winner's name.  The winner then challenged another winner all the while your previous opponent chanting your name until there were just two people left to challenge for supremacy.</p>
					<p>I found myself completely going through the motions, not really knowing what the heck was going on, not really paying any attention to the objective of this game or where it would end.  But before I knew it, I somehow found myself in the final match, against Boris, the security guard.  I certainly didn't think much of it, but all I could hear was my name being chanted: "Adam, Adam, Adam!"  Suddenly, I realized what was going on.</p>
					<p>It went to a Round of Three.  Boris won the first round, but I won the second round.  Could I pull off the Rocky over Drago victory in the final round?  Sadly, no... Boris won, perhaps due to luck, perhaps due to Russian Interference.  But there was no prize money, no medals, no rugelach (I would have gladly taken that!), but I was the People's Champ!  And that, my friend, is why we play Rock, Paper, Scissors here.  Enjoy!</p>
					<div className="prev-next">
						<Link to={ '/kibbutz' } className='custom-button'>Prev</Link>
						<Link to={ '/jaffa' } className='custom-button'>Next</Link>
					</div>
				</Column>
			</Row>
		</div>
		)
	}
}

