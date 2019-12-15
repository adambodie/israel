import React from 'react'
import Collapsible from 'react-collapsible'
import Scrollspy from 'react-scrollspy'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		pages: state.pages,
	}
}

const MainScrollspyItem = ({ scrollLink, pages }) => (
	<Scrollspy items={ pages.map((x)=> x.scroll) } currentClassName='is-current' className='c-side-nav__list nav-list' offset={-20}>
		{pages.map((x, startIndex) => (
			<li className='c-side-nav__item' key={startIndex}>
				<a href={`#day-${x.day}`} className='c-side-nav__link'>
					{x.day === 0 ? (`Introduction`) : (`Day ${x.day}`)}
				</a>
				<Collapsible trigger=''>
					{x.items.map((y, index) => (
						<div style={{fontSize: '12px'}} key={index}>
							<a href={`${scrollLink}${y.link}`}  className='c-side-nav__link'>{y.linkTitle}</a>
						</div>
						)
					)}
				</Collapsible>
			</li>
			)
		)}
	</Scrollspy>
)

export default connect(mapStateToProps) (MainScrollspyItem)



