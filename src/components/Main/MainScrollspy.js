import React from 'react';
import Scrollspy from 'react-scrollspy'
import Collapsible from 'react-collapsible';
import { Consumer } from '../Context/main';
import { mainLink } from '../../data/articles';

const MainScrollspy = () => (
		<Consumer>
			{ ({ pages }) => (
				<div className='o-sidebar o-sidebar--fixed-left c-side-nav'>
					<img className='logo' src={`${mainLink}/logo.gif`} alt='logo' />
					<nav className='c-side-nav__body'>
						<Scrollspy items={ pages.map((x)=> x.scroll) } currentClassName='is-current' className='c-side-nav__list nav-list' offset={-20}>
							{pages.map((x)=> { 
								return(
									<li className='c-side-nav__item' key={x}>
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
									</li>)
								})	
							}
						</Scrollspy>
					</nav>
				</div>
			)
		}
		</Consumer>
		
	)

export default MainScrollspy;
