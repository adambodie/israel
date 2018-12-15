import React from 'react';
import { Link } from 'react-router-dom';
import image from '../cover.jpg';

const Landing = () => {

		return(
			<div className="cover">
				<img src={image} alt="Cover" />
				<Link to={'/index'} className="landing custom-button">Enter</Link>
			</div>
		)
}

export default Landing;
