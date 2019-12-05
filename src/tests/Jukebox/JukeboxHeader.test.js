import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import JukeboxHeader from '../../components/Jukebox/JukeboxHeader'
import { cleanup } from 'react-testing-library'
  
afterEach(cleanup)

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<JukeboxHeader />, div)
	ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
	const tree = renderer.create(<JukeboxHeader />).toJSON()
	expect(tree).toMatchSnapshot()
})