import React from 'react'
import ReactTooltip from 'react-tooltip'
import { Row, Column } from 'react-foundation'

const Map = props => (
	<Row className='display grid-x'>
		<Column large={8} offsetOnLarge={2}>
			<div className={`${props.locationName.toLowerCase()}-map`}>
				<React.Fragment>
					<h1>Map of {props.locationName === 'Telaviv' ? (`Tel Aviv`) : (`${props.locationName}`)} Sites Visited</h1>
					<p>We visited multiple places in {props.locationName === 'Telaviv' ? (`Tel Aviv`) : (`${props.locationName}`)} during our trip.  To view the name of each stop we made, hover over the symbols.</p>
				</React.Fragment>	
				<div className='map'>
					{props.locations.map((x, index) => <button key={index} className={`map-button ${props.locationName.toLowerCase()}-item-${index}`} data-tip={x.name}><strong>x</strong></button>)}
					<ReactTooltip />
				</div>
			</div>
		</Column>
	</Row>
)

export default Map
