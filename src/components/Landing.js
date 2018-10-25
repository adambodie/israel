import React, { Component} from 'react';
import { Link } from 'react-foundation';

export default class Landing extends Component {
	constructor(){
		super();
		this.state = {
			disabled: true
		}
	}
	render() {
		return(
			<div>
				<h1>Coming Soon</h1>
				<Link disabled={this.state.disabled} >Enter</Link>
			</div>
		)
	}
}

