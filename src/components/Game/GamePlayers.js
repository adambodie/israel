import React, { Component} from 'react';

export default class GamePlayers extends Component {

	handleChange() {
		this.props.handleClick();
	}
	
	render() {
		const { start, result, buttons, pScore, pClassName, pWin, oClassName, oScore, oWin, draw } = this.props;
		return (
		<div>
			{start ? (
				<div className='result'>
					<div className="flex">
						<div className="playerResult">
							<h3>Player</h3>
							<img id="playerOne" className={pClassName} src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/${buttons[pScore].name}.png`} alt={buttons[pScore].name} />
						</div>
						<div className="playerResult">
							<h3>Computer</h3>
							<img className={oClassName} src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/${buttons[oScore].name}.png`} alt={buttons[oScore].name} />
						</div>
					</div>
					<div className="resultText">
						<h4>{result}</h4>
					</div>
					<div className="score">
						<div>
							<h4>Player</h4>
							<h4>{pWin}</h4>
						</div>
						<div>
							<h4>Draw</h4>
							<h4>{draw}</h4>
						</div>
						<div>
							<h4>Computer</h4>
							<h4>{oWin}</h4>
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

