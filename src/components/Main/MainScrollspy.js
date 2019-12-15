import React from 'react'
import Collapsible from 'react-collapsible'
import MainScrollspyItem from '../../components/Main/MainScrollspyItem.js'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		getMobileOperatingSystem: state.getMobileOperatingSystem
	}
}

const MainScrollspy = ({ getMobileOperatingSystem }) => {
	const isMobile = getMobileOperatingSystem === 'unknown' ? '#' : ''
	let className = 'mobile-collapse'
	if (getMobileOperatingSystem !== 'unknown' && window.width < 768) {
		className = className + 'd'
	}
	return (
		<div className='o-sidebar o-sidebar--fixed-left c-side-nav'>
			<img className='logo' src={`/assets/main/logo.gif`} alt='logo' />
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
	
export default connect(mapStateToProps)(MainScrollspy)
