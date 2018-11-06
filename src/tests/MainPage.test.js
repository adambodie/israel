import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import MainPage from '../components/MainPage';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MainPage />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<MainPage />).toJSON();
	expect(tree).toMatchSnapshot();
});

