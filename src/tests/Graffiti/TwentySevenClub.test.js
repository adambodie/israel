import React from 'react'
import renderer from 'react-test-renderer'
import {
  render,
  cleanup,
  fireEvent
} from 'react-testing-library'

import TwentySevenClub from '../../components/Graffiti/TwentySevenClub'

afterEach(cleanup) 

it('renders correctly', () => {
	const tree = renderer.create(<TwentySevenClub />).toJSON()
	expect(tree).toMatchSnapshot()
})

it('opens a modal and closes it', () => {
	const spyOpen = jest.spyOn(TwentySevenClub.prototype, 'openModal')
	const spyClose = jest.spyOn(TwentySevenClub.prototype, 'closeModal')
	const { getByText, getByTestId, rerender } = render(<TwentySevenClub />)
	fireEvent.click(getByTestId('club-cover cover-one'))
	expect(spyOpen).toHaveBeenCalled()
	rerender(<TwentySevenClub />)
	fireEvent.click(getByText('x'))
	expect(spyClose).toHaveBeenCalled()
})