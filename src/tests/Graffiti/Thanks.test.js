import React from 'react'
import renderer from 'react-test-renderer'
import {
  render,
  cleanup,
  fireEvent
} from 'react-testing-library'

import Thanks from '../../components/Graffiti/Thanks'

afterEach(cleanup) 

it('renders correctly', () => {
	const tree = renderer.create(<Thanks />).toJSON()
	expect(tree).toMatchSnapshot()
})

it('calls "pressButton" prop on button click and changes text', () => {
    // Render new instance in every test to prevent leaking state
    const spy = jest.spyOn(Thanks.prototype, 'pressButton')
    const { getByTestId, rerender } = render(<Thanks />)
    fireEvent.click(getByTestId('button-top'))
    expect(spy).toHaveBeenCalled()
    rerender(<Thanks />)
    expect(getByTestId('button-top').textContent).toBe('Look down!')
  })