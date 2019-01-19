import React from 'react';
import { Consumer } from '../Context/main';
import MainIntro from './MainIntro';
import MainPageItems from './MainPageItems';


const MainPage = () => {	
	return (
		<Consumer>
			{ ({ pages }) => (
				<div className="o-main o-main--with-sidebar o-main--fixed-left-sidebar">
					<div className="container">
						<MainIntro />
						<MainPageItems />
					</div>
				</div>)
			}
		</Consumer>
	)
}

export default MainPage;
