import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import { Consumer } from '../Context/main';

export default class MainScrollspyItem extends Component {
	render() {
	return (
		<Consumer>
			{ ({ pages }) => (
				<div>
				{pages.map((x, startIndex)=> {
					return(
						<li className='c-side-nav__item' key={startIndex}>
							{x.day === 0 ? (
								<a href={`#day-${x.day}`} className='c-side-nav__link'>Introduction</a>
								) : (
								<a href={`#day-${x.day}`} className='c-side-nav__link'>Day {x.day}</a>
								)}
								<Collapsible trigger=''>
									{x.items.map((y, index) => {
										return(
											<div style={{fontSize: '12px'}} key={index}>
												<a href={`#${y.link}`}  className='c-side-nav__link'>{y.linkTitle}</a>
											</div>
										)}
									)}
								</Collapsible>
						</li>
						)
				})}
				</div>)
				}
		</Consumer>
	)
}
}





