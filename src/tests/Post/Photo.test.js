import React from 'react';
import renderer from 'react-test-renderer';
import Photo from '../../components/Posts/Photo';

it('renders correctly', () => {
	const tree = renderer.create(<Photo id='1' title='title' index='2' length='10'/>).toJSON();
	expect(tree).toMatchSnapshot();
});
