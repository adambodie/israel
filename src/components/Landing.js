import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return(
		<div className='cover'>
			<img src={'https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/cover.jpg'} alt='Cover' />
			<Link to={'/index'} className='landing custom-button'>Enter</Link>
		</div>
	)
}

export default Landing;
