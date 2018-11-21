import React, {Component} from 'react';
import { intro, dummy, jerusalemIntro } from '../../data/main';
import items from '../../images/items.jpg';
import globe from '../../images/globe.jpg';
import welcomeIsrael from '../../images/welcomeIsrael.jpg';
import jerusalem from '../../images/jerusalem.jpg';
import shukDay from '../../images/shukDay.jpg';
import shabbat from '../../images/shabbat.jpg';
import shukNight from '../../images/shukNight.jpg';
import yadVashem from '../../images/yadVashem.jpg';
import herzl from '../../images/herzl.jpg';
import yehuda from '../../images/yehuda.jpg';
import gilo from '../../images/gilo.jpg';
import laqye from '../../images/laqye.jpg';
import arad from '../../images/arad.jpg';
import desert from '../../images/desert.jpg';
import roman from '../../images/roman.jpg';
import masada from '../../images/masada.jpg';
import snake from '../../images/snake.jpg';
import nachal from '../../images/nachal.jpg';
import deadSea from '../../images/deadSea.jpg';
import telAvivNight from '../../images/telAvivNight.jpg';
import telAvivBeach from '../../images/telAvivBeach.jpg';
import graffiti from '../../images/graffiti.jpg';
import tama from '../../images/tama.jpg';
import kibbutz from '../../images/kibbutz.jpg';
import jaffa from '../../images/jaffa.jpg';
import telAviv from '../../images/telAviv.jpg';
import innovation from '../../images/innovation.jpg';
import independence from '../../images/independence.jpg';
import rothschild from '../../images/rothschild.jpg';

const MainContext = React.createContext();

export class Provider extends Component {
	state = {
			pages: [
				{
					scroll: 'day-0', 
					day: 0,
					items: [ 
					{
						title: "Before The Trip: Packing the Right Items", 
						intro: intro, 
						link: 'todoList', 
						image: items
					},
					{
						title: "The Journey Begins, El AL to Israel", 
						intro: dummy, 
						link: 'todoList', 
						image: globe
					},					
					]
				},
				{
					scroll: 'day-1', 
					day: 1,
					items: [ 
					{
						title: "Arrival in Israel: First Thoughts", 
						intro: jerusalemIntro, 
						link: 'todoList', 
						image: welcomeIsrael
					},

					{
						title: "Jerusalem: The Old City", 
						intro: dummy, 
						link: 'todoList', 
						image: jerusalem
					},					
					{
						title: "Madhouse at the Shuk before Shabbat", 
						intro: dummy, 
						link: 'todoList', 
						image: shukDay
					}					
					]
				},				
				{
					scroll: 'day-2', 
					day: 2,
					items: [ 
					{
						title: "Shabbat in Jerusalem: A Day to Rest", 
						intro: jerusalemIntro, 
						link: 'todoList', 
						image: shabbat
					},
					{
						title: "Nighttime at the Shuk", 
						intro: dummy, 
						link: 'todoList', 
						image: shukNight
					},					
					]
				},	
				{
					scroll: 'day-3', 
					day: 3,
					items: [ 
					{
						title: "Never Forget: Yad Vashem", 
						intro: jerusalemIntro, 
						link: 'todoList', 
						image: yadVashem
					},
					{
						title: "Zionism 101: Har Herzl", 
						intro: dummy, 
						link: 'todoList', 
						image: herzl
					},
					{
						title: "Ben Yehuda", 
						intro: dummy, 
						link: 'todoList', 
						image: yehuda
					},						
					]
				},	
				{
					scroll: 'day-4', 
					day: 4,
					items: [ 
					{
						title: "Leaving Jerusalem: Seeing the Israeli-Arab Conflict", 
						intro: jerusalemIntro, 
						link: 'todoList', 
						image: gilo
					},
					{
						title: "Out in the Desert with the Bedouins", 
						intro: dummy, 
						link: 'todoList', 
						image: laqye
					},	{
						title: "Arad in the Desert: Shelter Included for the authentic Israel Experience", 
						intro: dummy, 
						link: 'todoList', 
						image: arad
					},					
					]
				},	
				{
					scroll: 'day-5', 
					day: 5,
					items: [ 
					{
						title: "The Judean Desert: Hot Fun Before Masada", 
						intro: jerusalemIntro, 
						link: 'todoList', 
						image: desert
					},
					{
						title: "Masada: The Roman Ramp Up", 
						intro: dummy, 
						link: 'todoList', 
						image: roman
					},{
						title: "Masada: On Top of it all", 
						intro: dummy, 
						link: 'todoList', 
						image: masada
					},{
						title: "Masada: Down the Snake Path", 
						intro: dummy, 
						link: 'todoList', 
						image: snake
					},{
						title: "Nachal: Not a Mirage", 
						intro: dummy, 
						link: 'todoList', 
						image: nachal
					},{
						title: "The Dead Sea: Healing in the Lowest Point with Mud", 
						intro: dummy, 
						link: 'todoList', 
						image: deadSea
					},{
						title: "Welcome to Tel Aviv, the Greatest City in the World", 
						intro: dummy, 
						link: 'todoList', 
						image: telAvivNight
					}					
					]
				},	
				{
					scroll: 'day-6', 
					day: 6,
					items: [ 
					{
						title: "Morning Stroll on the beaches of Tel Aviv", 
						intro: jerusalemIntro, 
						link: 'todoList', 
						image: telAvivBeach
					},
					{
						title: "Choose Your Own Adventure: Tel Aviv Graffiti Tour: Mossad style", 
						intro: dummy, 
						link: 'todoList', 
						image: graffiti
					},{
						title: "Choose Your Own Adventure: Tel Aviv Art Museum in an Amazing City", 
						intro: dummy, 
						link: 'todoList', 
						image: tama
					},{
						title: "Nice Kibbutz", 
						intro: dummy, 
						link: 'todoList', 
						image: kibbutz
					}										
					]
				},	
				{
					scroll: 'day-7', 
					day: 7,
					items: [ 
					{
						title: "Jaffa: The Old Part of Tel Aviv", 
						intro: jerusalemIntro, 
						link: 'todoList', 
						image: jaffa
					},
					{
						title: "Innovation Center", 
						intro: dummy, 
						link: 'todoList', 
						image: innovation
					},
					{
						title: "Rothschild", 
						intro: dummy, 
						link: 'todoList', 
						image: telAviv
					},
					{
						title: "Independence Hall", 
						intro: dummy, 
						link: 'todoList', 
						image: independence
					},
					{
						title: "Farewell", 
						intro: dummy, 
						link: 'todoList', 
						image: rothschild
					}					
					]
				}
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
