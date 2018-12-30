import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import TodoList from '../../components/Todo/TodoList';
import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MemoryRouter><TodoList /></MemoryRouter>, div);
	ReactDOM.unmountComponentAtNode(div);
});
it('renders correctly', () => {
	const tree = renderer.create(<MemoryRouter><TodoList /></MemoryRouter>).toJSON();
	expect(tree).toMatchSnapshot();
});

describe('<TodoList />', () => {
    const wrapper = mount(<MemoryRouter><TodoList /></MemoryRouter>);
    
    /*it('renders eight scrollspy items', () => {	
        expect(wrapper.find('.c-side-nav__item').length).toEqual(8);
     });

     it('renders nine sections', () => {	
        expect(wrapper.find('section').length).toEqual(9);
     });*/     
});