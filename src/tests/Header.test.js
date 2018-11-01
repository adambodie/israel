import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import Header from '../components/Header';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Header />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<Header />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders a `header`', () => {
	const wrapper = shallow(<Header />);
    expect(wrapper.find('header').length).toEqual(1);
 });
