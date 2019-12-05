import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'
import Shakshuka from '../components/Shakshuka/Shakshuka'
import {
	render,
	cleanup,
	fireEvent
  } from 'react-testing-library'
  
  afterEach(cleanup)


it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<MemoryRouter><Shakshuka /></MemoryRouter>, div)
	ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
	const tree = renderer.create(<MemoryRouter><Shakshuka /></MemoryRouter>).toJSON()
	expect(tree).toMatchSnapshot()
})

it('opens a modal and closes it', () => {
	const spyOpen = jest.spyOn(Shakshuka.prototype, 'openModal')
	const spyClose = jest.spyOn(Shakshuka.prototype, 'closeModal')
	const { getByText, getByTestId, rerender } = render(<MemoryRouter><Shakshuka /></MemoryRouter>)
	fireEvent.click(getByTestId('egg eggOne'))
	expect(spyOpen).toHaveBeenCalled()
	rerender(<MemoryRouter><Shakshuka /></MemoryRouter>)
	fireEvent.click(getByText('x'))
	expect(spyClose).toHaveBeenCalled()
})
