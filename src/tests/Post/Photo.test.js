import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Photo from '../../components/Posts/Photo';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Photo />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<Photo id="1" title="title" index="2" length="10"/>).toJSON();
	expect(tree).toMatchSnapshot();
});
