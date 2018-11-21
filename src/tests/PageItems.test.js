import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import MainPageItems from '../components/Main/MainPageItems';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MainPageItems />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<MainPageItems />).toJSON();
	expect(tree).toMatchSnapshot();
});


