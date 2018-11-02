import React, { Component} from 'react';
import Scroll from './Scroll';
import MainPage from './MainPage';

export default class Main extends Component {
	
	constructor() {
		super();
		this.state ={
			items: ['day-0', 'day-1', 'day-2', 'day-3'],
			pages: [0,1,2,3]
		}
	}
	render() {
		return(
			<div className="o-wrapper">
				<Scroll items={this.state.items} pages={this.state.pages} />
				<MainPage pages={this.state.pages} />
			</div>
		)
	}
}


