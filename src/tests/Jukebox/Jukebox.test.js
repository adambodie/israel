import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router'
import Jukebox from '../../components/Jukebox/Jukebox'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<MemoryRouter><Jukebox /></MemoryRouter>, div)
	ReactDOM.unmountComponentAtNode(div)
})
