import React from 'react';
import { Row, Column } from 'react-foundation';
import ReactMarkdown from 'react-markdown';
import { title, paragraph } from '../data/intro';



const MainIntro = () => {
	return (
		<section style={{minHeight: '600px'}}>
			<Row className="display grid-x">
				<Column large={10} offsetOnLarge={1} className="o-hero u-align-left">
					<ReactMarkdown source={title}/>
					<img src='http://placehold.it/600x450' alt='placehold'/>
					<ReactMarkdown source={paragraph}/>
				</Column>
			</Row>
		</section>
	)
}

export default MainIntro;
