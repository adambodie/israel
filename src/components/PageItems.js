import React from 'react';
import { Link } from "react-router-dom";
import { Row, Column } from 'react-foundation';
import ReactMarkdown from 'react-markdown';

const PageItems = (props) => {	
	return (
		<div>
			{props.pages.map((x) => {
				return (
					<section key={`${x.day}`} className="o-content" style={{minHeight: '600px'}} id={`day-${x.day}`}>
						<Row className="display grid-x">
							<Column large={10} offsetOnLarge={1} className="o-content__inner" style={{marginTop: '59px'}}>
								<div className="o-content__inner-head">
									{x.day === 0 ? (
										<h1 className="c-heading-4 c-heading-4--upper">Introduction</h1>
										) : (
										<h1 className="c-heading-4 c-heading-4--upper">Day {x.day}</h1>
									)}
								</div>
								<div className="o-content__inner-body">
									<h2>{x.title}</h2>
									<img src={x.image} alt={x.title}/>
									<ReactMarkdown source={x.intro}/>
									<Link to={`/${x.link}`} className='button'>Read More</Link>
								</div>
							</Column>
						</Row>
					</section>
				)
			})		
		}
		</div>
	)
}
export default PageItems;
