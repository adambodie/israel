import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import Header from '../components/Header';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MemoryRouter><Header /></MemoryRouter>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<MemoryRouter><Header /></MemoryRouter>).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders a `header`', () => {
	const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
    expect(wrapper.find('header').length).toEqual(1);
 });
