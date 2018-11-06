import React, {Component} from 'react';
import { intro, dummy } from '../../data/main';
import image from '../../images/items.jpg';

const MainContext = React.createContext();

export class Provider extends Component {
	state = {
			pages: [
				{scroll: 'day-0', day: 0, title: "Before The Trip: Packing the Right Items", intro: intro, link: 'todoList', image: image},
				{scroll: 'day-1', day: 1, title: "Title", intro: dummy, link: 'todoList', image: image},
				{scroll: 'day-2', day: 2, title: "Title", intro: dummy, link: 'todoList', image: image}, 
				{scroll: 'day-3', day: 3, title: "Title", intro: dummy, link: 'todoList', image: image}
			]
	}		
	
	render() {
		return(
			<MainContext.Provider value={{pages: this.state.pages}}>
				{this.props.children}
			</MainContext.Provider>
		)
	}	
}

export const Consumer = MainContext.Consumer;
