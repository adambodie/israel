import React from 'react'
import { Provider } from '../Context/main'
import MainScrollspy from './MainScrollspy'
import MainPage from './MainPage'

const Main = () => (
	<Provider>
		<div className='o-wrapper'>
			<MainScrollspy />
			<MainPage />
		</div>
	</Provider>
)

export default Main
