import React from 'react';
import { Row, Column } from 'react-foundation';
import { mainLink } from '../data/articles';


const NoMatch = ({ location }) => {
	return (
		<div className='404'>
			<h1>Page Not Found</h1>
			<Row className='display grid-x noMatch'>
				<Column small={4}>  
					<img src={`${mainLink}/bathroom.jpg`} alt='bathroom' />
				</Column>
				<Column small={8}>
					<p>If you're looking for the bathroom, you&apos;ve come to the right place.</p>
					<p>If you're looking for the link for <strong>{location.pathname}</strong>, it doesn't exist.</p>
					<p>If you believe {location.pathname} exists, please contact the <a href='mailto:fake-email-address@xyz.com'>administrator</a>.</p>
					<p>Otherwise, go back and try again.</p>
				</Column>
			</Row>
		</div>
	);
};

export default NoMatch;
