import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import JukeboxLegs from '../../components/Jukebox/JukeboxLegs';
import {
	render,
	cleanup
  } from 'react-testing-library'
  
  afterEach(cleanup)

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<JukeboxLegs />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<JukeboxLegs />).toJSON();
	expect(tree).toMatchSnapshot();
});