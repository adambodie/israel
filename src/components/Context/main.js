import React, {Component} from 'react';
import { 
	dummy, 
	todoIntro, 
	elAlIntro, 
	benGurionIntro, 
	oldJerusalemIntro, 
	shukDayIntro, 
	shabbatIntro, 
	shukNightIntro 
} from '../../data/articles';
import routes from '../../data/routes';

const MainContext = React.createContext();

export class Provider extends Component {
	state = {
			pages: [
				{
					scroll: 'day-0', 
					day: 0,
					items: [ 
					{
						title: "Things to Bring to Israel", 
						intro: todoIntro, 
						link: 'todoList', 
						image: 'items'
					},
					{
						title: routes[0].title, 
						intro: elAlIntro, 
						link: 'el-al', 
						image: 'globe'
					},					
					]
				},
				{
					scroll: 'day-1', 
					day: 1,
					items: [ 
					{
						title: routes[1].title, 
						intro: benGurionIntro, 
						link: 'ben-gurion', 
						image: 'welcomeIsrael'
					},

					{
						title: routes[2].title, 
						intro: oldJerusalemIntro, 
						link: 'old-Jerusalem', 
						image: 'jerusalem'
					},					
					{
						title: routes[3].title, 
						intro: shukDayIntro, 
						link: 'shuk-day', 
						image: 'shukDay'
					}					
					]
				},				
				{
					scroll: 'day-2', 
					day: 2,
					items: [ 
					{
						title: routes[4].title, 
						intro: shabbatIntro, 
						link: 'shabbat', 
						image: 'shabbat'
					},
					{
						title: routes[5].title, 
						intro: shukNightIntro, 
						link: 'shuk-night', 
						image: 'shukNight'
					},					
					]
				},	
				{
					scroll: 'day-3', 
					day: 3,
					items: [ 
					{
						title: "Never Forget: Yad Vashem", 
						intro: dummy, 
						link: 'todoList', 
						image: 'yadVashem'
					},
					{
						title: "Zionism 101: Har Herzl", 
						intro: dummy, 
						link: 'todoList', 
						image: 'herzl'
					},
					{
						title: "Ben Yehuda", 
						intro: dummy, 
						link: 'todoList', 
						image: 'yehuda'
					},						
					]
				},	
				{
					scroll: 'day-4', 
					day: 4,
					items: [ 
					{
						title: "Leaving Jerusalem: Seeing the Israeli-Arab Conflict", 
						intro: dummy, 
						link: 'todoList', 
						image: 'gilo'
					},
					{
						title: "Out in the Desert with the Bedouins", 
						intro: dummy, 
						link: 'todoList', 
						image: 'laqye'
					},	{
						title: "Arad in the Desert: Shelter Included for the authentic Israel Experience", 
						intro: dummy, 
						link: 'todoList', 
						image: 'arad'
					},					
					]
				},	
				{
					scroll: 'day-5', 
					day: 5,
					items: [ 
					{
						title: "The Judean Desert: Hot Fun Before Masada", 
						intro: dummy, 
						link: 'todoList', 
						image: 'desert'
					},
					{
						title: "Masada: The Roman Ramp Up", 
						intro: dummy, 
						link: 'todoList', 
						image: 'roman'
					},{
						title: "Masada: On Top of it all", 
						intro: dummy, 
						link: 'todoList', 
						image: 'masada'
					},{
						title: "Masada: Down the Snake Path", 
						intro: dummy, 
						link: 'todoList', 
						image: 'snake'
					},{
						title: "Nachal: Not a Mirage", 
						intro: dummy, 
						link: 'todoList', 
						image: 'nachal'
					},{
						title: "The Dead Sea: Healing in the Lowest Point with Mud", 
						intro: dummy, 
						link: 'todoList', 
						image: 'deadSea'
					},{
						title: "Welcome to Tel Aviv, the Greatest City in the World", 
						intro: dummy, 
						link: 'todoList', 
						image: 'telAvivNight'
					}					
					]
				},	
				{
					scroll: 'day-6', 
					day: 6,
					items: [ 
					{
						title: "Morning Stroll on the beaches of Tel Aviv", 
						intro: dummy, 
						link: 'todoList', 
						image: 'telAvivBeach'
					},
					{
						title: "Choose Your Own Adventure: Tel Aviv Graffiti Tour: Mossad style", 
						intro: dummy, 
						link: 'todoList', 
						image: 'graffiti'
					},{
						title: "Choose Your Own Adventure: Tel Aviv Art Museum in an Amazing City", 
						intro: dummy, 
						link: 'todoList', 
						image: 'tama'
					},{
						title: "Nice Kibbutz", 
						intro: dummy, 
						link: 'todoList', 
						image: 'kibbutz'
					}										
					]
				},	
				{
					scroll: 'day-7', 
					day: 7,
					items: [ 
					{
						title: "Jaffa: The Old Part of Tel Aviv", 
						intro: dummy, 
						link: 'todoList', 
						image: 'jaffa'
					},
					{
						title: "Innovation Center", 
						intro: dummy, 
						link: 'todoList', 
						image: 'innovation'
					},
					{
						title: "Rothschild", 
						intro: dummy, 
						link: 'todoList', 
						image: 'telAviv'
					},
					{
						title: "Independence Hall", 
						intro: dummy, 
						link: 'todoList', 
						image: 'independence'
					},
					{
						title: "Farewell", 
						intro: dummy, 
						link: 'todoList', 
						image: 'rothschild'
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
