import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Game from '../../components/Game/Game'
import { MemoryRouter } from 'react-router'

import {
	render,
	cleanup,
	fireEvent
  } from 'react-testing-library'

afterEach(cleanup)

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<MemoryRouter><Game /></MemoryRouter>, div)
	ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
	const tree = renderer.create(<MemoryRouter><Game /></MemoryRouter>).toJSON()
	expect(tree).toMatchSnapshot()
})

it('calls "onClick" prop on button click and changes text', () => {
	const spy = jest.spyOn(Game.prototype, 'handleReset')
	const { getByText } = render(<MemoryRouter><Game /></MemoryRouter>)
	fireEvent.click(getByText('Reset'))
	expect(spy).toHaveBeenCalled()
})

it('calls "onClick" prop on button click and changes text', () => {
	const spy = jest.spyOn(Game.prototype, 'handleClick')
	const { getByTestId } = render(<MemoryRouter><Game /></MemoryRouter>)
	fireEvent.click(getByTestId('button-rock'))
	expect(spy).toHaveBeenCalled()
})
