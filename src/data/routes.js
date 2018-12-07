import { elAl, benGurion, oldJerusalem, shukDay, shabbat } from './articles';

const routes = [
	{
		title: "El Al: The Beginning of the Trip to Israel" ,
		paragraph: elAl,
		link: "el-al"
	},
	{
		title: "Arriving in Israel: My First Thoughts",
		paragraph: benGurion,
		link: "ben-gurion"
	},
	{
		title: "The Old City",
		paragraph: oldJerusalem,
		link: "old-jerusalem"
	},
	{
		title: "Mahane Yehuda: The Shuk Experience Before Shabbat",
		paragraph: shukDay,
		link: "shuk-day"
	},
	{
		title: "Shabbat in Jerusalem: A Day to Rest",
		paragraph: shabbat,
		link: "shabbat",
		number: 1,
		begin: 0,
		end: 4
	}	
]

export default routes;
