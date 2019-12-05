import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'
import Post from '../../components/Posts/Post'
import sinon from 'sinon'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
  render,
  cleanup
} from 'react-testing-library'

beforeEach(() => {
	const mock = new MockAdapter(axios)
	const mockData = {data: {title: 'Picture', id:'4000'}}
	mock.onGet(mockData).reply(200, mockData)
})

it('renders correctly', () => {
	const mockData = {data: {title: 'Picture', id:'4000'}}
	const tree = renderer.create(
		<MemoryRouter>
			<Post 
				title='Title'
				paragraph={'Lorem ipsum dolor sit amet'} 
				prev={'prev'} 
				next={'next'}
				data={mockData}
				/>
		</MemoryRouter>
		).toJSON()
	expect(tree).toMatchSnapshot()
})

it('calls componentDidMount', () => {
	const mockData = {data: {title: 'Picture', id:'4000'}}
    sinon.spy(Post.prototype, 'componentDidMount')
    const { getByText, getByTestId } = render(<MemoryRouter>
		<Post
			title='Title' 
			paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
			prev={'prev'} 
			next={'next'}
			data={mockData}
			/>
	</MemoryRouter>)
    expect(Post.prototype.componentDidMount).toHaveProperty('callCount', 1)
  })


