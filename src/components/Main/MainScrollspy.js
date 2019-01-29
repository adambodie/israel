import React from 'react';
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
						<MainScrollspyItem startIndex={100}/>
					</nav>
				</div>
			)}
		}
		</Consumer>
		
	)

export default MainScrollspy;
