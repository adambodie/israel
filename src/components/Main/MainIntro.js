import React from 'react';
import { Row, Column } from 'react-foundation';
import ReactMarkdown from 'react-markdown';
import { title, paragraph } from '../../data/intro';
import welcome from '../../images/welcome.jpg';

const MainIntro = () => {
	return (
		<section style={{minHeight: '600px'}}>
			<Row className="display grid-x welcomeIntro">
				<Column large={10} offsetOnLarge={1} className="o-hero u-align-left">
					<ReactMarkdown source={title}/>
					<img src={welcome} alt='Welcome'/>
					<ReactMarkdown source={paragraph}/>
				</Column>
			</Row>
		</section>
	)
}

export default MainIntro;
