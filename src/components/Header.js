import React from 'react';
import image from '../header.jpg';

const Header = () => (
				<header>
					<div className="top-bar">
						<div className="top-bar-left">
							<h4>Adam's Birthright Trip to The Land of Israel</h4>
						</div>
						<img src={image} alt="RT-38-1047" />
					</div>
				</header>
);

export default Header;
