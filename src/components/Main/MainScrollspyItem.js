import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import Scrollspy from 'react-scrollspy'
import { Consumer } from '../Context/main';

export default class MainScrollspyItem extends Component {
	render() {
	const { scrollLink } = this.props;
	return (
		<Consumer>
			{ ({ pages }) => (
				<div>
				<Scrollspy items={ pages.map((x)=> x.scroll) } currentClassName='is-current' className='c-side-nav__list nav-list' offset={-20}>
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
												<a href={`${scrollLink}${y.link}`}  className='c-side-nav__link'>{y.linkTitle}</a>
											</div>
										)}
									)}
								</Collapsible>
						</li>
						)
				})}
				</Scrollspy>
				</div>)
				}
		</Consumer>
	)
}
}





