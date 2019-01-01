import React, {Component} from 'react';
import { 
	dummy, 
	todoIntro, 
	elAlIntro, 
	benGurionIntro, 
	oldJerusalemIntro, 
	shukDayIntro, 
	shabbatIntro, 
	shukNightIntro,
	yadVashemIntro,
	shakshukaIntro,
	herzlIntro,
	benYehudaIntro,
	giloIntro,
	laqyeIntro,
	aradIntro,
	desertIntro,
	romanIntro,
	masadaIntro,
	snakeIntro,
	nachalIntro,
	deadSeaIntro,
	telAvivNightIntro
} from '../../data/articles';
import routes from '../../data/routes';

const MainContext = React.createContext();

export class Provider extends Component {
	state = {
			pages: [
				{
					scroll: 'day-0', 
					day: 0,
					date: 'November 7-8, 2018',
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
					date: 'November 9, 2018',
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
					date: 'November 10, 2018',
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
					date: 'November 11, 2018',
					items: [ 
					{
						title: routes[6].title, 
						intro: yadVashemIntro, 
						link: 'yad-vashem', 
						image: 'yadVashem'
					},					
					{
						title: "How Not to Eat Your Shakshuka", 
						intro: shakshukaIntro, 
						link: 'shakshuka', 
						image: 'shakshuka'
					},
					{
						title: routes[7].title, 
						intro: herzlIntro, 
						link: 'herzl', 
						image: 'herzl'
					},
					{
						title: routes[8].title, 
						intro: benYehudaIntro, 
						link: 'ben-yehuda', 
						image: 'yehuda'
					},						
					]
				},	
				{
					scroll: 'day-4', 
					day: 4,
					date: 'November 12, 2018',
					items: [ 
					{
						title: routes[9].title, 
						intro: giloIntro, 
						link: 'gilo', 
						image: 'gilo'
					},
					{
						title: routes[10].title, 
						intro: laqyeIntro, 
						link: 'laqye', 
						image: 'laqye'
					},	
					{
						title: routes[11].title, 
						intro: aradIntro, 
						link: 'arad', 
						image: 'arad'
					}					
					]
				},	
				{
					scroll: 'day-5', 
					day: 5,
					date: 'November 13, 2018',
					items: [ 
					{
						title: routes[12].title, 
						intro: desertIntro, 
						link: 'desert', 
						image: 'desert'
					},
					{
						title: routes[13].title, 
						intro: romanIntro, 
						link: 'roman', 
						image: 'roman'
					},{
						title: routes[14].title, 
						intro: masadaIntro, 
						link: 'masada', 
						image: 'masada'
					},{
						title: routes[15].title,
						intro: snakeIntro, 
						link: 'snake', 
						image: 'snake'
					},{
						title: routes[16].title, 
						intro: nachalIntro, 
						link: 'nachal', 
						image: 'nachal'
					},{
						title: routes[17].title, 
						intro: deadSeaIntro, 
						link: 'dead-sea', 
						image: 'deadSea'
					},{
						title: routes[18].title, 
						intro: telAvivNightIntro, 
						link: 'tel-aviv-night', 
						image: 'telAvivNight'
					}					
					]
				},	
				{
					scroll: 'day-6', 
					day: 6,
					date: 'November 14, 2018',
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
					date: 'November 15, 2018',
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
