import React from 'react';
import Collapsible from 'react-collapsible';
import { Consumer } from '../Context/main';
import { mainLink } from '../../data/articles';
import MainScrollspyItem from '../../components/Main/MainScrollspyItem.js';

const MainScrollspy = () => (
		<Consumer>
			{ ({ pages }) => {
					const getMobileOperatingSystem = () => {
						const userAgent = navigator.userAgent || navigator.vendor || window.opera;
						  // Windows Phone must come first because its UA also contains "Android"
						  if (/windows phone/i.test(userAgent)) {
							  return "Windows Phone";
						  }
						  if (/android/i.test(userAgent)) {
							  return "Android";
						  }	  
						  // iOS detection 
						  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
							  return "iOS";
						  }	  
						  return "unknown";
					  }
				const isMobile = getMobileOperatingSystem() === 'unknown' ? '#' : '';
				let className = 'mobile-collapse';
				if (getMobileOperatingSystem() !== 'unknown' && window.width < 768) {
					className = className + 'd'
				}
				return (
				<div className='o-sidebar o-sidebar--fixed-left c-side-nav'>
					<img className='logo' src={`${mainLink}/logo.gif`} alt='logo' />
					<div className={className}>
						<Collapsible trigger=''>
							<MainScrollspyItem startIndex={0} scrollLink={isMobile} />
						</Collapsible>
					</div>
					<nav className='c-side-nav__body'>
						<MainScrollspyItem startIndex={100} scrollLink={isMobile}/>
					</nav>
				</div>
			)}
		}
		</Consumer>
		
	)

export default MainScrollspy;
