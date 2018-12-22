import React from 'react';
import ReactTooltip from 'react-tooltip';

const jerusalem = [
	{name: 'Western Wall', right: 95, top: 90},
	{name: 'Jewish Quarter', right: 110, top: 105},
	{name: 'Teddy Park', right: 143, top: 98},
	{name: 'Walter Haas Promenade', right: 113, top: 243},
	{name: 'Mahane Yehuda', right: 231, top: 36},
	{name: 'Ben Yehuda Street', right: 199, top: 56},
	{name: 'Gilo', right: 379, top: 407},
	{name: 'Keres Shopping Mall', right: 379, top: 100},
	{name: 'Bait Vagan Guest House', right: 408, top: 132},
	{name: 'Yad Vashem', right: 448, top: 107},
	{name: 'Mount Herzl', right: 419, top: 107},
];


const Map = () => {
    return (
    <div className="jerusalem-map">
		<h1>Map of Jerusalem Sites Visited</h1>
		<p>We visited multiple places in Jerusalem in four days.  To view the name of each stop we made, hover over the symbols</p>
		<div className="map">
			{jerusalem.map((x, index) => <button key={index} className="map-button" style={{right: x.right, top: x.top}} data-tip={x.name}><strong>x</strong></button>)}			
			<ReactTooltip />
		</div>
	</div>
	)
}

export default Map;
