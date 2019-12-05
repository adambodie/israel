import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import JukeboxItem from '../../components/Jukebox/JukeboxItem'
import { StateMock } from '@react-mock/state'
import {
	render,
    cleanup,
    fireEvent,
    waitForElement
  } from 'react-testing-library'
  
  afterEach(cleanup)

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<JukeboxItem data={{title: 'title', src: 'src'}}/>, div)
	ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
	const tree = renderer.create(<JukeboxItem data={{title: 'title', src: 'src'}}/>).toJSON()
	expect(tree).toMatchSnapshot()
})

it('clickHandler to have been called', () => {
	const onClick = jest.spyOn(JukeboxItem.prototype, 'clickHandler')
	const { getByText } = render(<JukeboxItem data={{title: 'title', src: 'src'}}/>)
	fireEvent.click(getByText('o'))
	expect(onClick).toHaveBeenCalled()
})


const renderComponent = ({ view }) =>
  render(
    <StateMock state={{ view }}>
      <JukeboxItem data={{title: 'title', src: 'src'}}/>
    </StateMock>
  )

  it('renders initial view', async () => {
    const { getByTestId } = renderComponent({ view: 'front' })
    await waitForElement(() => getByTestId(/front-view/i))
  })

  it('update view state', async () => {
    const { getByTestId, getByText } = renderComponent({ view: 'front' })
    fireEvent.click(getByText('o'))
    await waitForElement(() => getByTestId(/back-view/i))
  })