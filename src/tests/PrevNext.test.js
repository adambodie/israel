import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';

import PrevNext from '../components/PrevNext';
import {
  render,
  cleanup,
  fireEvent
} from 'react-testing-library'

afterEach(cleanup)

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MemoryRouter><PrevNext prev={'/prev'} next={'/next'}/></MemoryRouter>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(
    <MemoryRouter>
      <PrevNext prev={'/prev'} next={'/next'} />
    </MemoryRouter>
  ).toJSON();
	expect(tree).toMatchSnapshot();
});