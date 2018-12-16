import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Post from '../components/Posts/Post';

it('renders correctly', () => {
	const tree = renderer.create(
		<MemoryRouter>
			<Post 
				title="Title"
				paragraph={"Lorem ipsum dolor sit amet"} 
				prev={"prev"} 
				next={"next"} 
				/>
		</MemoryRouter>
		).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders a `title`', () => {
	const wrapper = shallow(<Post title="Title" 
								paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} 
								prev={'prev'} 
								next={'next'} 
								/>
							);
	expect(wrapper.find('h1').length).toEqual(1);
 });
