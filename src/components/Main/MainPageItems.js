import React from 'react';
import { Consumer } from '../Context/main';
import { Link } from 'react-router-dom';
import { Row, Column } from 'react-foundation';
import ReactMarkdown from 'react-markdown';

const MainPageItems = () => {
	return (
		<Consumer>
			{ ({ pages }) => (
				<div>
				{pages.map((x) => {
					return (
						<section key={`${x.day}`} className='o-content' id={`day-${x.day}`}>
							<Row className='display grid-x'>
								<Column className='o-content__inner'>
									<div className='o-content__inner-head'>
										{x.day === 0 ? (
											<h1 className='c-heading-4 c-heading-4--upper'>Introduction</h1>
											) : (
											<h1 className='c-heading-4 c-heading-4--upper'>Day {x.day}</h1>
										)}
										<h5>{x.date}</h5>
									</div>
									{x.items.map((y, index)=> {
										return (
											<div className='o-content__inner-body' key={index} id={y.link}>
												<h3>{y.title}</h3>
												<img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/${y.image}.jpg`} alt={y.title} />
												<ReactMarkdown source={y.intro}/>
												<Link to={ `${y.link}` } className='custom-main custom-button'>Read More</Link>
											</div>
											)
										})
									}
								</Column>
							</Row>
						</section>
					)
				})
			}
		</div>)
		}
		</Consumer>
	)
}
export default MainPageItems;
