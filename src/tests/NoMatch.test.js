import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NoMatch from '../components/NoMatch';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<NoMatch />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<NoMatch />).toJSON();
	expect(tree).toMatchSnapshot();
});

