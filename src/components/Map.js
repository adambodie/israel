import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Row, Column } from 'react-foundation';

const Map = (props) => {
    return (
		<Row className='display grid-x'>
			<Column large={8} offsetOnLarge={2}>
			<div className={`${props.locationName.toLowerCase()}-map`}>	
				{props.locationName === 'Telaviv' ? (
					<div>
						<h1>Map of Tel Aviv Sites Visited</h1>
						<p>We visited multiple places in Tel Aviv during our trip.  To view the name of each stop we made, hover over the symbols.</p>
					</div>	
				) : (
				<div>	
					<h1>Map of {props.locationName} Sites Visited</h1>
					<p>We visited multiple places in {props.locationName} during our trip.  To view the name of each stop we made, hover over the symbols.</p>
				</div>
				)}
				<div className='map'>
					{props.locations.map((x, index) => <button key={index} className={`map-button ${props.locationName.toLowerCase()}-item-${index}`} data-tip={x.name}><strong>x</strong></button>)}			
					<ReactTooltip />
				</div>
			</div>
			</Column>
		</Row>
	)
}

export default Map;
