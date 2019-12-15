import React from 'react'
import MainIntro from './MainIntro'
import MainPageItems from './MainPageItems'

const MainPage = () => (
	<div className='o-main o-main--with-sidebar o-main--fixed-left-sidebar'>
		<div className='container'>
			<MainIntro />
			<MainPageItems />
		</div>
	</div>
)

export default MainPage
