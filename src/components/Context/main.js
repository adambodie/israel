import React, {Component} from 'react';
import { intro, dummy } from '../../data/main';
import items from '../../images/items.jpg';
import jerusalemOne from '../../images/jerusalem1.jpg';
import shuk from '../../images/shuk.jpg';
import yadVashem from '../../images/yadVashem.jpg';
import gilo from '../../images/gilo.jpg';
import masada from '../../images/masada.jpg';
import tama from '../../images/tama.jpg';
import telAviv from '../../images/telAviv.jpg';

const MainContext = React.createContext();

export class Provider extends Component {
	state = {
			pages: [
				{scroll: 'day-0', day: 0, title: "Before The Trip: Packing the Right Items", intro: intro, link: 'todoList', image: items},
				{scroll: 'day-1', day: 1, title: "Title", intro: dummy, link: 'todoList', image: jerusalemOne},
				{scroll: 'day-2', day: 2, title: "Title", intro: dummy, link: 'todoList', image: shuk}, 
				{scroll: 'day-3', day: 3, title: "Title", intro: dummy, link: 'todoList', image: yadVashem}, 
				{scroll: 'day-4', day: 4, title: "Title", intro: dummy, link: 'todoList', image: gilo}, 
				{scroll: 'day-5', day: 5, title: "Title", intro: dummy, link: 'todoList', image: masada}, 
				{scroll: 'day-6', day: 6, title: "Title", intro: dummy, link: 'todoList', image: tama}, 
				{scroll: 'day-7', day: 7, title: "Title", intro: dummy, link: 'todoList', image: telAviv}
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
