import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import MainIntro from '../../components/Main/MainIntro';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MainIntro />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<MainIntro />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders a h1 title', () => {
	const wrapper = mount(<MainIntro />);
    expect(wrapper.find('h1').length).toEqual(1);
 });
