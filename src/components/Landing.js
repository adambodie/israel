import React from 'react';
import { Link } from 'react-router-dom';
import { mainLink } from '../data/articles';

const Landing = () => {
	return(
		<div className='cover'>
			<img src={`${mainLink}/cover.jpg`} alt='Cover' />
			<Link to={'/index'} className='landing custom-button'>Enter</Link>
			<p id='author'>by Adam Bodie</p>
		</div>
	)
}

export default Landing;
