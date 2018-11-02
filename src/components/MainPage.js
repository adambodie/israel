import React from 'react';
import MainIntro from './MainIntro';
import PageItems from './PageItems';

const MainPage = (props) => {
	return (
		<div className="o-main o-main--with-sidebar o-main--fixed-left-sidebar">
			<div className="container" style={{"marginTop": 59}}>
				<section style={{minHeight: '600px'}}>
					<MainIntro />
				</section>
				<PageItems pages={props.pages} />
			</div>
		</div>
	)
}

export default MainPage;
