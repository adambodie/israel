import React, { Component} from 'react'
import { Row, Column } from 'react-foundation'
import GamePlayers from './GamePlayers'
import GamePost from './GamePost'

export default class Game extends Component {
	constructor() {
		super()
		this.state = {
			result: '',
			draw: 0,
			start: false,
			buttons: [
				{name: 'rock', id: 0, disabled: false},
				{name: 'paper', id: 1, disabled: false},
				{name: 'scissors', id: 2, disabled: false}
			],
			players: [
				{name: 'Player', score: 0, win: 0, className: ''},
				{name: 'Computer', score: 0, win: 0, className: ''}
			]
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleReset = this.handleReset.bind(this)
	}
	

	handleReset() {
		const newPlayers = [
				{name: 'Player', score: 0, win: 0, className: ''},
				{name: 'Computer', score: 0, win: 0, className: ''}
		]
		this.setState({
			players: newPlayers,
			draw: 0,
			result: '',
			start: false
		})
	}

	handleClick(e, index) {
		setTimeout(() => this.resetClass(), 1500)
		const { buttons, draw, players } = this.state
		const newPlayers = [...players]
		const newButtons = [...buttons]
		newButtons[0].disabled = true
		newButtons[1].disabled = true
		newButtons[2].disabled = true
		newPlayers[1].score = Math.floor(Math.random() * 3)
		newPlayers[0].score = buttons[index].id
		let addDraw = draw
		let newResult = ''
		if (newPlayers[0].score === newPlayers[1].score) {
			newResult = 'It\'s a Draw'
			newPlayers[0].className = 'player-draw'
			newPlayers[1].className = 'computer-draw'
			addDraw++
		}  else if  ((newPlayers[1].score === 2 && newPlayers[0].score === 0) 
					|| (newPlayers[1].score < newPlayers[0].score) ) {
			newResult = `Player wins`
			newPlayers[0].className = 'player-pick'
			newPlayers[1].className = 'loss'
			newPlayers[0].win++
		} else {
			newResult = `Computer wins`
			newPlayers[1].win++
			newPlayers[1].className = 'computer-pick'
			newPlayers[0].className = 'loss'
		}
		this.setState({
			players: newPlayers,
			buttons: newButtons,
			draw: addDraw,
			result: newResult,
			start: true
		})
	}
	
	resetClass() {
		const { players, buttons } = this.state
		const newPlayers = [...players]
		const newButtons = [...buttons]
		newButtons[0].disabled = false
		newButtons[1].disabled = false
		newButtons[2].disabled = false
		newPlayers[1].className = ''
		newPlayers[0].className = ''
		this.setState({
			players: newPlayers,
			buttons: newButtons
		})
	}
	render() {
		const { buttons, players, draw, start, result } = this.state
		return (
			<React.Fragment>
				<Row className='display grid-x game'>
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
							{buttons.map((x, index)=> <button data-testid={`button-${x.name}`} disabled={x.disabled} className={`button-${x.name}`} key={index} onClick={()=> this.handleClick(this, index)}><img src={`/assets/main/${x.name}.png`} alt={x.name}  /></button>)}
							<button className='reset' onClick={()=>this.handleReset()}>Reset</button>
						</div>
					</Column>
				</Row>
				<GamePost />
			</React.Fragment>
		)
	}
}

