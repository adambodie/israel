import React from 'react';
import Scrollspy from 'react-scrollspy'

const Scroll = (props) => {
	return (
		<div className="o-sidebar o-sidebar--fixed-left c-side-nav">
			<nav className="c-side-nav__body">
				<Scrollspy items={ props.items } currentClassName="is-current" className="c-side-nav__list nav-list" offset={-20}>
					{props.pages.map((x)=> { 
						return(
							<li className="c-side-nav__item" key={x}>
								{x.day === 0 ? (
									<a href={`#day-${x.day}`} className="c-side-nav__link">Introduction</a>
									) : (
									<a href={`#day-${x.day}`} className="c-side-nav__link">Day {x.day}</a>
								)}								
							</li>)
						})	
					}
				</Scrollspy>
			</nav>
		</div>
	)
}

export default Scroll;
