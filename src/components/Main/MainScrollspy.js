import React from 'react';
import Scrollspy from 'react-scrollspy'
import Collapsible from 'react-collapsible';
import { Consumer } from '../Context/main';
import { mainLink } from '../../data/articles';
import MainScrollspyItem from '../../components/Main/MainScrollspyItem.js';

const MainScrollspy = () => (
		<Consumer>
			{ ({ pages }) => {
				return (
				<div className='o-sidebar o-sidebar--fixed-left c-side-nav'>
					<img className='logo' src={`${mainLink}/logo.gif`} alt='logo' />
					<div className='mobile-collapse'>
					<Collapsible trigger=''>
						<MainScrollspyItem startIndex={0} />
					</Collapsible>
					</div>
					<nav className='c-side-nav__body'>
						<Scrollspy items={ pages.map((x)=> x.scroll) } currentClassName='is-current' className='c-side-nav__list nav-list' offset={-20}>
							<MainScrollspyItem startIndex={100}/>
						</Scrollspy>
					</nav>
				</div>
			)}
		}
		</Consumer>
		
	)

export default MainScrollspy;
