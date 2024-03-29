import { 
	elAl, 
	benGurion, 
	oldJerusalem, 
	shukDay, 
	shabbat, 
	shukNight, 
	yadVashem, 
	herzl, 
	benYehuda, 
	gilo, 
	laqye, 
	arad, 
	desert, 
	roman, 
	masada, 
	snake,
	einGedi,
	deadSea,
	telAvivNight,
	telAvivBeach,
	graffiti,
	carmel,
	tama,
	kibbutz,
	jaffa,
	innovation,
	rothschild,
	independence,
	farewell,
	epilogue
	} from './articles'

const routes = [
	{
		title: 'El Al: The Beginning of the Trip to Israel' ,
		paragraph: elAl,
		link: 'el-al',
		prev: 'todoList',
		next: 'ben-gurion',
	},
	{
		title: 'Arriving in Israel: My First Thoughts',
		paragraph: benGurion,
		link: 'ben-gurion',
		prev: 'el-al',
		next: 'old-jerusalem',
	},
	{
		title: 'The Old City',
		paragraph: oldJerusalem,
		link: 'old-jerusalem',
		prev: 'ben-gurion',
		next: 'shuk-day',
	},
	{
		title: 'Mahane Yehuda: The Shuk Experience Before Shabbat',
		paragraph: shukDay,
		link: 'shuk-day',
		prev: 'old-jerusalem',
		next: 'shabbat'
	},
	{
		title: 'Shabbat in Jerusalem: A Day to Rest',
		paragraph: shabbat,
		link: 'shabbat',
		prev: 'shuk-day',
		next: 'shuk-night',
		number: 1,
		begin: 0,
		end: 4
	},
	{
		title: 'Back to the Shuk: The Night Time Experience',
		paragraph: shukNight,
		link: 'shuk-night',
		prev: 'shabbat',
		next: 'yad-vashem'
	},
	{
		title: 'Never Forget: Yad Vashem',
		paragraph: yadVashem,
		link: 'yad-vashem',
		prev: 'shuk-night',
		next: 'shakshuka'
	},
	{
		title: 'Zionism 101: Mount Herzl',
		paragraph: herzl,
		link: 'herzl',
		prev: 'shakshuka',
		next: 'ben-yehuda'
	},
	{
		title: 'One Last Night in Jerusalem at Ben Yehuda',
		paragraph: benYehuda,
		link: 'ben-yehuda',
		prev: 'herzl',
		next: 'gilo',
		number: 2,
		begin: 5,
		end: 8
	},{
		title: 'Leaving Jerusalem: Seeing the Israeli-Arab Conflict',
		paragraph: gilo,
		link: 'gilo',
		prev: 'ben-yehuda',
		next: 'laqye'
	},{
		title: 'Out in the Desert with the Bedouins',
		paragraph: laqye,
		link: 'laqye',
		prev: 'gilo',
		next: 'arad'
	},{
		title: 'Arad in the Desert: Shelter Included for the Authentic Israel Experience',
		paragraph: arad,
		link: 'arad',
		prev: 'laqye',
		next: 'desert',
		number: 3,
		begin: 9,
		end: 12
	},{
		title: 'The Negev Desert: Hot Fun Before Masada',
		paragraph: desert,
		link: 'desert',
		prev: 'arad',
		next: 'roman',
		map: true,
		locations: [
			{name: 'Western Wall'},
			{name: 'Jewish Quarter'},
			{name: 'Teddy Park'},
			{name: 'Walter Haas Promenade'},
			{name: 'Mahane Yehuda'},
			{name: 'Ben Yehuda Street'},
			{name: 'Gilo'},
			{name: 'Keres Shopping Mall'},
			{name: 'Bait Vagan Guest House'},
			{name: 'Yad Vashem'},
			{name: 'Mount Herzl'},
		],
		locationName: 'Jerusalem'
	},{
		title: 'Masada: The Roman Ramp Up',
		paragraph: roman,
		link: 'roman',
		prev: 'desert',
		next: 'masada',
	},{
		title: 'Masada: On Top of it All!',
		paragraph: masada,
		link: 'masada',
		prev: 'roman',
		next: 'snake',
		map: true,
		locations: [
			{name: 'Synagogue'},
			{name: 'Byzantine Church'},
			{name: 'Southern Cistern'},
			{name: 'Northern Palace'},
			{name: 'Snake Path Gate'},
			{name: 'Western Byzantine Gate'},
			{name: 'Southern Observation Point'},
			{name: 'Western Palace'}

		],
		locationName: 'Masada'
	},{
		title: 'Masada: Down the Snake Path',
		paragraph: snake,
		link: 'snake',
		prev: 'masada',
		next: 'ein-gedi'
	},{
		title: 'Ein Gedi: Not a Mirage',
		paragraph: einGedi,
		link: 'ein-gedi',
		prev: 'snake',
		next: 'dead-sea'
	},{
		title: 'The Dead Sea: Healing in the Mud',
		paragraph: deadSea,
		link: 'dead-sea',
		prev: 'ein-gedi',
		next: 'tel-aviv-night'
	},{
		title: 'Welcome to Tel Aviv, the Greatest City in the World',
		paragraph: telAvivNight,
		link: 'tel-aviv-night',
		prev: 'dead-sea',
		next: 'tel-aviv-beach',
		number: 4,
		begin: 13,
		end: 16
	},{
		title: 'Morning Stroll along the beaches of Tel Aviv',
		paragraph: telAvivBeach,
		link: 'tel-aviv-beach',
		prev: 'tel-aviv-night',
		next: 'graffiti'
	},{
		title: 'Choose Your Own Adventure: Tagging Tel Aviv with Graffiti',
		paragraph: graffiti,
		link: 'graffiti',
		prev: 'tel-aviv-beach',
		next: 'carmel',
		graffiti: true
	},{
		title: 'In Search of A Hebrew Sports Shirt',
		paragraph: carmel,
		link: 'carmel',
		prev: 'graffiti',
		next: 'tama'
	},{
		title: 'Choose Your Own Adventure: Tel Aviv Museum of Art',
		paragraph: tama,
		link: 'tama',
		prev: 'carmel',
		next: 'kibbutz'	
	},{
		title: 'Shhhhhh!  We\'re going to a Kibbutz Styled Hotel!',
		paragraph: kibbutz,
		link: 'kibbutz',
		prev: 'tama',
		next: 'game'
	},{
		title: 'Jaffa: The Old Part of Tel Aviv',
		paragraph: jaffa,
		link: 'jaffa',
		prev: 'cat',
		next: 'innovation'
	},{
		title: 'Innovation: How Israel provides a Path to the Future',
		paragraph: innovation,
		link: 'innovation',
		prev: 'jaffa',
		next: 'rothschild'
	},{
		title: 'One Last Lunch along Rothschild, the Heart of Tel Aviv',
		paragraph: rothschild,
		link: 'rothschild',
		prev: 'innovation',
		next: 'independence'
	},{
		title: 'Independence Hall: Where Israel became Israel',
		paragraph: independence,
		link: 'independence',
		prev: 'rothschild',
		next: 'farewell'
	},{
		title: 'Farewell Israel, What a Wonderful Trip',
		paragraph: farewell,
		link: 'farewell',
		prev: 'independence',
		next: 'jukebox',
		number: 5,
		begin: 17,
		end: 20,
		map: true,
		locations: [
			{name: 'Jaffa'},
			{name: 'Independence Hall'},
			{name: 'Tel Aviv Museum of Art'},
			{name: 'The Center of Israeli Innovation by Taglit'},
			{name: 'Golden Beach Hotel'},
			{name: 'Carmel Market'},
			{name: 'Graffiti Tour'}

		],
		locationName: 'Telaviv'
	},{
		title: 'This is the End: Heading Back Home',
		paragraph: epilogue,
		link: 'epilogue',
		prev: 'jukebox',
		next: 'index'
	}
]

export default routes
