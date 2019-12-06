import React from 'react'
import { Link } from 'react-router-dom'

const PrevNext = props => (
	<div className='prev-next'>
		<Link to={props.prev} className='custom-button'>Prev</Link>
		<Link to={props.next} className='custom-button'>Next</Link>
	</div>
)

export default PrevNext
