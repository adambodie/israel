import React, { Component} from 'react';
import GamePlayer from './GamePlayer';
import GameBegin from './GameBegin';
import GameScore from './GameScore';
import GameResult from './GameResult';

export default class GamePlayers extends Component {

	handleChange() {
		this.props.handleClick();
	}
	
	render() {
		const { players, start, result, buttons, draw } = this.props;
		return (
			<React.Fragment>
				{start ? (
					<div className='result'>
						<div className='flex'>
							{players.map((x, index) => {
								return (
								<GamePlayer key={index} name={x.name} className={x.className} buttons={buttons} players={x}/>
									)
								})}
						</div>
						<GameResult result={result} />
						<GameScore players={players} draw={draw} />
					</div>
				) : (
					<GameBegin />
				)
			}
			</React.Fragment>
		)
	}
}

