import React from 'react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Main from '../../components/Main/Main'
import { MemoryRouter } from 'react-router'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<MemoryRouter><Main /></MemoryRouter>, div)
	ReactDOM.unmountComponentAtNode(div)
})
it('renders correctly', () => {
	const tree = renderer.create(<MemoryRouter><Main /></MemoryRouter>).toJSON()
	expect(tree).toMatchSnapshot()
})
