import React from 'react'

const GameScore = ({ players, draw }) => {
	return (
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
	)
}

export default GameScore
