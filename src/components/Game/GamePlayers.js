import React, { Component} from 'react';
import GamePlayer from './GamePlayer';
export default class GamePlayers extends Component {

	handleChange() {
		this.props.handleClick();
	}
	
	render() {
		const { players, start, result, buttons, draw } = this.props;
		return (
			<div>
				{start ? (
					<div className='result'>
						<div className='flex'>
							{players.map((x, index) => {
								return (
								<GamePlayer key={index} name={x.name} className={x.className} buttons={buttons} players={x}/>
									)
								})}
						</div>
						<div className='resultText'>
							<h4>{result}</h4>
						</div>
						<div className='score'>
							<div>
								<h4>Player</h4>
								<h4>{players[0].win}</h4>
							</div>
							<div>
								<h4>Draw</h4>
								<h4>{draw}</h4>
							</div>
							<div>
								<h4>Computer</h4>
								<h4>{players[1].win}</h4>
							</div>
						</div>
					</div>
				) : (
				<div className='begin'>
					<h2>Press any button to begin</h2>
				</div>
				)
			}
			</div>
		)
	}
}

