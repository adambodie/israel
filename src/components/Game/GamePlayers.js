import React, { Component} from 'react';

export default class GamePlayers extends Component {

	handleChange() {
		this.props.handleClick();
	}
	render() {
		const { result, buttons, playerScore, opponentScore, playerWin, opponentWin, draw } = this.props;
		return (
		<div>
			{this.props.start ? (
				<div className='result'>
					<div className="flex">
						<div>
							<h3>Player</h3>
							<img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/${buttons[playerScore].name}.png`} alt={buttons[playerScore].name} />
						</div>
						<div>
							<h3>Computer</h3>
							<img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/${buttons[opponentScore].name}.png`} alt={buttons[opponentScore].name} />
						</div>
					</div>
					<div className="resultText">
						<h4>{result}</h4>
					</div>
					<div className="score">
						<div>
							<h4>Player</h4>
							<h4>{playerWin}</h4>
						</div>
						<div>
							<h4>Draw</h4>
							<h4>{draw}</h4>
						</div>
						<div>
							<h4>Computer</h4>
							<h4>{opponentWin}</h4>
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

