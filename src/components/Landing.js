import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => (
	<div className='cover'>
		<img src={`/assets/main/cover.jpg`} alt='Cover' />
		<Link to={'/index'} className='landing custom-button'>Enter</Link>
		<p id='author'>by Adam Bodie</p>
	</div>
)


export default Landing
