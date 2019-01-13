import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Landing from '../components/Landing';
import {
  render,
  cleanup
} from 'react-testing-library'

afterEach(cleanup)

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MemoryRouter><Landing /></MemoryRouter>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  ).toJSON();
	expect(tree).toMatchSnapshot();
});



test('loads and displays greeting', async () => {
  const { getByText } = render(<MemoryRouter><Landing/></MemoryRouter>)
	expect(getByText('Enter')).toBeInTheDocument()
})