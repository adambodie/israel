import React from 'react';
import MainIntro from './MainIntro';
import PageItems from './PageItems';
import { Consumer } from './Context/main';

const MainPage = (props) => {	
	return (
		<Consumer>
		{ ({ pages }) => (
			<div className="o-main o-main--with-sidebar o-main--fixed-left-sidebar">
			<div className="container" style={{"marginTop": 59}}>
				<MainIntro />
				<PageItems />
			</div>
		</div>)
		}
		</Consumer>
	)
}

export default MainPage;
