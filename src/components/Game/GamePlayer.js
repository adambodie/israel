import React from 'react'

const GamePlayer = ({ index, name, className, buttons, players }) => (
	<div key={index} className='playerResult'>
		<h3>{name}</h3>
		<img className={className} src={`/assets/main/${buttons[players.score].name}.png`} alt={buttons[players.score].name} />
	</div>
)

export default GamePlayer
