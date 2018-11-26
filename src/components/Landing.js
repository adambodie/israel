import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-foundation';

export default class Landing extends Component {
	constructor(){
		super();
		this.state = {
			disabled: false
		}
	}
	render() {
		return(
			<div>
				<h1>Coming Soon</h1>
				<Button className="landingLink"><Link to={'/index'} disabled={this.state.disabled} className="landingLink">Enter</Link></Button>
			</div>
		)
	}
}

