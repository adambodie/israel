import { elAl, benGurion, oldJerusalem, shukDay, shabbat, shukNight, yadVashem, herzl, benYehuda } from './articles';

const routes = [
	{
		title: "El Al: The Beginning of the Trip to Israel" ,
		paragraph: elAl,
		link: "el-al",
		prev: "todoList",
		next: "ben-gurion",
	},
	{
		title: "Arriving in Israel: My First Thoughts",
		paragraph: benGurion,
		link: "ben-gurion",
		prev: "el-al",
		next: "old-jerusalem",		
	},
	{
		title: "The Old City",
		paragraph: oldJerusalem,
		link: "old-jerusalem",
		prev: "ben-gurion",
		next: "shuk-day",			
	},
	{
		title: "Mahane Yehuda: The Shuk Experience Before Shabbat",
		paragraph: shukDay,
		link: "shuk-day",
		prev: "old-jerusalem",
		next: "shabbat"	
	},
	{
		title: "Shabbat in Jerusalem: A Day to Rest",
		paragraph: shabbat,
		link: "shabbat",
		prev: "shuk-day",
		next: "shuk-night",			
		number: 1,
		begin: 0,
		end: 4
	},
	{
		title: "Back to the Shuk: The Night Time Experience",
		paragraph: shukNight,
		link: "shuk-night",
		prev: "shabbat",
		next: "yad-vashem"			
	},
	{
		title: "Never Forget: Yad Vashem",
		paragraph: yadVashem,
		link: "yad-vashem",
		prev: "shuk-night",
		next: "shakshuka"		
	},
	{
		title: "Zionism 101: Mount Herzl",
		paragraph: herzl,
		link: "herzl",
		prev: "shakshuka",
		next: "ben-yehuda"		
	},
	{
		title: "One Last Night in Jerusalem at Ben Yehuda",
		paragraph: benYehuda,
		link: "ben-yehuda",
		prev: "herzl",
		next: "gilo",		
		number: 2,
		begin: 5,
		end: 8				
	}
]

export default routes;
