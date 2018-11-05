import React, { Component} from 'react';
import Scroll from './Scroll';
import MainPage from './MainPage';
import { intro, dummy } from '../data/todo';
import image from '../images/items.jpg';

export default class Main extends Component {
	
	constructor() {
		super();
		this.state ={
			items: ['day-0', 'day-1', 'day-2', 'day-3'],
			pages: [
				{day: 0, title: "Before The Trip: Packing the Right Items", intro: intro, link: 'todoList', image: image},
				{day: 1, title: "Title", intro: dummy, link: 'todoList', image: image},
				{day: 2, title: "Title", intro: dummy, link: 'todoList', image: image}, 
				{day: 3, title: "Title", intro: dummy, link: 'todoList', image: image}
			]
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


