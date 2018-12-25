import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Header = () => (
				<header>
					<div className="top-bar">
						<div className="top-bar-left">
							<h4>Adam's Birthright Trip to The Land of Israel</h4>
							<Link to={'/index'}>
								<FontAwesome
									name='home'
									style={{ textShadow: '2px 2px 4px black' }}
									/>
							</Link>
						</div>
						<img src={'https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/header.jpg'} alt="RT-38-1047" />
					</div>
				</header>
);

export default Header;
