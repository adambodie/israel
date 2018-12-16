import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Shakshuka from '../components/Shakshuka';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MemoryRouter><Shakshuka /></MemoryRouter>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<MemoryRouter><Shakshuka /></MemoryRouter>).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders a `h2`', () => {
	const wrapper = shallow(<Shakshuka />);
	expect(wrapper.find('h2').length).toEqual(1);
 });

