import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import Landing from '../components/Landing';
import { Link } from 'react-foundation';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Landing />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<Landing />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders a `Link`', () => {
	const wrapper = shallow(<Landing />);
    expect(wrapper.find(Link).length).toEqual(1);
});

