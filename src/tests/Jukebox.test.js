import React from 'react';
import ReactDOM from 'react-dom';
import Jukebox from '../components/Jukebox/Jukebox';
import {
	render,
	cleanup
  } from 'react-testing-library'
  
  afterEach(cleanup)

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Jukebox />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('calls correct title', () => {
	const { getByTestId } = render(<Jukebox />)
	expect(getByTestId('title-display').textContent).toBe("Sababa!")
  })
