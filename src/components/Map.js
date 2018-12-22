import React from 'react';
import ReactTooltip from 'react-tooltip';

const jerusalem = [
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
];


const Map = () => {
    return (
    <div className="jerusalem-map">
		<h1>Map of Jerusalem Sites Visited</h1>
		<p>We visited multiple places in Jerusalem in four days.  To view the name of each stop we made, hover over the symbols</p>
		<div className="map">
			{jerusalem.map((x, index) => <button key={index} className={`map-button item-${index}`} data-tip={x.name}><strong>x</strong></button>)}			
			<ReactTooltip />
		</div>
	</div>
	)
}

export default Map;
