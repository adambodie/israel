import React, { Component} from 'react';

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
									<div key={index} className='playerResult'>
										<h3>{x.name}</h3>
										<img className={x.className} src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/${buttons[x.score].name}.png`} alt={buttons[x.score].name} />
									</div>
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

