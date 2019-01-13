import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
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
