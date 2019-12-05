import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'
import MainIntro from '../../components/Main/MainIntro'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<MemoryRouter><MainIntro /></MemoryRouter>, div)
	ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
	const tree = renderer.create(<MemoryRouter><MainIntro /></MemoryRouter>).toJSON()
	expect(tree).toMatchSnapshot()
})
