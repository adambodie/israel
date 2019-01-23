import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Header from '../components/Header';
import {
  render,
  cleanup
} from 'react-testing-library'

afterEach(cleanup)


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MemoryRouter><Header /></MemoryRouter>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<MemoryRouter><Header /></MemoryRouter>).toJSON();
	expect(tree).toMatchSnapshot();
});

test('calls correct title', () => {
  const { getByTestId } = render(<MemoryRouter><Header /></MemoryRouter>)
  expect(getByTestId('title-display').textContent).toBe('Adam\'s Birthright Trip to The Land of Israel')
})
