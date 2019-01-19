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
	telAvivNightIntro,
	telAvivBeachIntro,
	graffitiIntro,
	carmelIntro,
	tamaIntro,
	kibbutzIntro,
	gameIntro,
	catIntro,
	jaffaIntro,
	innovationIntro
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
						image: 'item',
						linkTitle: 'Todo List'
					},
					{
						title: routes[0].title, 
						intro: elAlIntro, 
						link: 'el-al', 
						image: 'globe',
						linkTitle: 'El Al'
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
						image: 'welcomeIsrael',
						linkTitle: 'Ben Gurion'
					},

					{
						title: routes[2].title, 
						intro: oldJerusalemIntro, 
						link: 'old-jerusalem', 
						image: 'jerusalem',
						linkTitle: 'Old Jerusalem'
					},					
					{
						title: routes[3].title, 
						intro: shukDayIntro, 
						link: 'shuk-day', 
						image: 'shukDay',
						linkTitle: 'Shuk Day'
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
						image: 'shabbat',
						linkTitle: 'Shabbat'
					},
					{
						title: routes[5].title, 
						intro: shukNightIntro, 
						link: 'shuk-night', 
						image: 'shukNight',
						linkTitle: 'Shuk Night'
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
						image: 'yadVashem',
						linkTitle: 'Yad Vashem'
					},					
					{
						title: "How Not to Eat Your Shakshuka", 
						intro: shakshukaIntro, 
						link: 'shakshuka', 
						image: 'shakshuka',
						linkTitle: 'Shakshuka'
					},
					{
						title: routes[7].title, 
						intro: herzlIntro, 
						link: 'herzl', 
						image: 'herzl',
						linkTitle: 'Mount Herzl'
					},
					{
						title: routes[8].title, 
						intro: benYehudaIntro, 
						link: 'ben-yehuda', 
						image: 'yehuda',
						linkTitle: 'Ben Yehuda'
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
						image: 'gilo',
						linkTitle: 'Gilo'
					},
					{
						title: routes[10].title, 
						intro: laqyeIntro, 
						link: 'laqye', 
						image: 'laqye',
						linkTitle: 'Laqye'
					},	
					{
						title: routes[11].title, 
						intro: aradIntro, 
						link: 'arad', 
						image: 'arad',
						linkTitle: 'Arad'
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
						image: 'desert',
						linkTitle: 'Negev Desert'
					},
					{
						title: routes[13].title, 
						intro: romanIntro, 
						link: 'roman', 
						image: 'roman',
						linkTitle: 'Roman Ramp'
					},{
						title: routes[14].title, 
						intro: masadaIntro, 
						link: 'masada', 
						image: 'masada',
						linkTitle: 'Masada'
					},{
						title: routes[15].title,
						intro: snakeIntro, 
						link: 'snake', 
						image: 'snake',
						linkTitle: 'Snake Path'
					},{
						title: routes[16].title, 
						intro: nachalIntro, 
						link: 'nachal', 
						image: 'nachal',
						linkTitle: 'Ein Gedi'
					},{
						title: routes[17].title, 
						intro: deadSeaIntro, 
						link: 'dead-sea', 
						image: 'deadSea',
						linkTitle: 'Dead Sea'
					},{
						title: routes[18].title, 
						intro: telAvivNightIntro, 
						link: 'tel-aviv-night', 
						image: 'telAvivNight',
						linkTitle: 'Tel Aviv Night'
					}					
					]
				},	
				{
					scroll: 'day-6', 
					day: 6,
					date: 'November 14, 2018',
					items: [ 
					{
						title: routes[19].title, 
						intro: telAvivBeachIntro, 
						link: 'tel-aviv-beach', 
						image: 'telAvivBeach',
						linkTitle: 'Tel Aviv Beach'
					},
					{
						title: routes[20].title, 
						intro: graffitiIntro, 
						link: 'graffiti', 
						image: 'graffiti',
						linkTitle: 'Graffiti'
					},
					{
						title: routes[21].title, 
						intro: carmelIntro, 
						link: 'carmel', 
						image: 'carmel',
						linkTitle: 'Carmel Market'
					},
					{
						title: routes[22].title, 
						intro: tamaIntro, 
						link: 'tama', 
						image: 'tama',
						linkTitle: 'Tel Aviv Museum of Art'
					},{
						title: routes[23].title, 
						intro: kibbutzIntro, 
						link: 'kibbutz', 
						image: 'kibbutz',
						linkTitle: 'Kibbutz'
					},{
						title: "Rock, Paper, Scissors Showdown at the Kibbutz", 
						intro: gameIntro, 
						link: 'game', 
						image: 'game',
						linkTitle: 'Game'
					}										
					]
				},	
				{
					scroll: 'day-7', 
					day: 7,
					date: 'November 15, 2018',
					items: [ 
					{
						title: "Cats!!!", 
						intro: catIntro, 
						link: 'cat', 
						image: 'cat',
						linkTitle: 'Cats'
					},
					{
						title: routes[24].title,  
						intro: jaffaIntro, 
						link: 'jaffa', 
						image: 'jaffa',
						linkTitle: 'Jaffa'
					},
					{
						title: routes[25].title, 
						intro: innovationIntro, 
						link: 'innovation', 
						image: 'innovation',
						linkTitle: 'Innovation'
					},
					{
						title: "Rothschild", 
						intro: dummy, 
						link: 'todoList', 
						image: 'telAviv',
						linkTitle: 'Rothschild'
					},
					{
						title: "Independence Hall", 
						intro: dummy, 
						link: 'todoList', 
						image: 'independence',
						linkTitle: 'Independence Hall'
					},
					{
						title: "Farewell", 
						intro: dummy, 
						link: 'todoList', 
						image: 'rothschild',
						linkTitle: 'Farewell'
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
