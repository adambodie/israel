import React from 'react';
import Scroll from './Scroll';
import MainPage from './MainPage';
import { Provider } from './Context/main';


const Main = () => {
		return(
			<Provider>
				<div className="o-wrapper">
					<Scroll />
					<MainPage />
				</div>
			</Provider>
		)
}

export default Main;
