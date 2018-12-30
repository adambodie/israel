import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Jukebox from '../components/Jukebox';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Jukebox />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders a `title`', () => {
	const wrapper = mount(<Jukebox />);
	console.log(wrapper.debug());
	expect(wrapper.find('.jukebox-title h1').text()).toBe('Sababa!');
 });