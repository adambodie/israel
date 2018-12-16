import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import PhotoList from '../components/Posts/PhotoList';

it('renders correctly', () => {
	const tree = renderer.create(
		<MemoryRouter>
			<PhotoList data={[{id: '4000', title: 'title'},{id: '4001', title: 'title1'}]}
				/>
		</MemoryRouter>
		).toJSON();
	expect(tree).toMatchSnapshot();
});

