import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NoMatch from '../components/NoMatch'
import { MemoryRouter } from 'react-router'

const location = { pathname: '/dashboard/' }

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<MemoryRouter><NoMatch location={location} /></MemoryRouter>, div)
	ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly with correct pathname', () => {
	const tree = renderer.create(<MemoryRouter><NoMatch location={location} /></MemoryRouter>).toJSON()
	expect(tree).toMatchSnapshot()
})

