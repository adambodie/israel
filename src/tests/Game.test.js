import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Game from '../components/Game/Game';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Game />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<Game />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders a `h1`', () => {
	const wrapper = shallow(<Game />);
	expect(wrapper.find('h1').length).toEqual(1);
 });

