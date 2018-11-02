import React from 'react';

const ListItems = (props) => {
	return (
		<div>
			{props.pages.map((x)=> { 
				return(
					<li className="c-side-nav__item" key={x}>
						<a href={`#day-${x}`} className="c-side-nav__link">Day {x}</a>
					</li>)
				})	
			}
		</div>
	)
}

export default ListItems;
