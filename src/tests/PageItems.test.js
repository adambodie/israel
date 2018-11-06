import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import PageItems from '../components/PageItems';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<PageItems />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<PageItems />).toJSON();
	expect(tree).toMatchSnapshot();
});


