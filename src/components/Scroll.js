import React from 'react';
import ListItems from './ListItems';
import Scrollspy from 'react-scrollspy'

const Scroll = (props) => {
	return (
		<div className="o-sidebar o-sidebar--fixed-left c-side-nav">
			<nav className="c-side-nav__body">
				<Scrollspy items={ props.items } currentClassName="is-current" className="c-side-nav__list nav-list">
					<ListItems pages={props.pages} />
				</Scrollspy>
			</nav>
		</div>
	)
}

export default Scroll;
