import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import Jukebox from '../components/Jukebox/Jukebox';
import {
	render,
	cleanup
  } from 'react-testing-library'
  
  afterEach(cleanup)

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MemoryRouter><Jukebox /></MemoryRouter>, div);
	ReactDOM.unmountComponentAtNode(div);
});

