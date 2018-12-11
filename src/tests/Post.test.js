import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import Post from '../components/Posts/Post';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Post />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
const tree = renderer.create(<Post title="Title" paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders a `title`', () => {
	const wrapper = shallow(<Post title="Title"/>);
    expect(wrapper.find('h1').length).toEqual(1);
 });

