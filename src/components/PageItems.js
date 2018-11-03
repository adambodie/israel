import React from 'react';
import { Link } from "react-router-dom";
import { Row, Column } from 'react-foundation';

const PageItems = (props) => {	
	return (
		<div>
			{props.pages.map((x) => {
				return (
					<section key={x} className="o-content" style={{minHeight: '600px'}} id={`day-${x}`}>
						<Row className="display grid-x">
							<Column large={10} offsetOnLarge={1} className="o-content__inner" style={{marginTop: '59px'}}>
								<div className="o-content__inner-head">
									<h2 className="c-heading-4 c-heading-4--upper">Day {x}</h2>
								</div>
								<div className="o-content__inner-body">
									<h1>Title</h1>
									<img src='http://placehold.it/600x450' alt='placehold'/>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									<Link to="/todoList" className="button">Click Here</Link>
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
