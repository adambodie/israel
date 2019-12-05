import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import JukeboxList from '../../components/Jukebox/JukeboxList'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<JukeboxList data={{title: 'title', src: 'src'}}/>, div)
	ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
	const tree = renderer.create(<JukeboxList data={{title: 'title', src: 'src'}}/>).toJSON()
	expect(tree).toMatchSnapshot()
})

