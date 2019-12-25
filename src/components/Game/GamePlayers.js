import React, { Component} from 'react'
import GamePlayer from './GamePlayer'
import GameScore from './GameScore'

export default class GamePlayers extends Component {
	handleChange() {
		this.props.handleClick()
	}	
	render() {
		const { players, start, result, buttons, draw } = this.props
		return (
			<React.Fragment>
				{start ? (
					<div className='result'>
						<div className='flex'>
							{players.map((x, index) => <GamePlayer key={index} name={x.name} className={x.className} buttons={buttons} players={x}/>)}
						</div>
						<div className='resultText'>
							<h4>{result}</h4>
						</div>
						<GameScore players={players} draw={draw} />
					</div>
				) : (
					<div className='begin'>
						<h2>Press any button to begin</h2>
					</div>
				)
			}
			</React.Fragment>
		)
	}
}