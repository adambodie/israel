import React from 'react';
import { mainLink } from '../../data/articles';

const GamePlayer = ({ index, name, className, buttons, players }) => {
	return (
	<div key={index} className='playerResult'>
		<h3>{name}</h3>
		<img className={className} src={`${mainLink}/${buttons[players.score].name}.png`} alt={buttons[players.score].name} />
	</div>
	)
}

export default GamePlayer;
