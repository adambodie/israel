import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router'
import Landing from '../components/Landing';
import { Button } from 'react-foundation';

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

it('renders a `Link`', () => {
	const wrapper = shallow(<Landing />);
    expect(wrapper.find(Button).length).toEqual(1);
});

