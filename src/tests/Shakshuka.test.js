import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Shakshuka from '../components/Shakshuka';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MemoryRouter><Shakshuka /></MemoryRouter>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<MemoryRouter><Shakshuka /></MemoryRouter>).toJSON();
	expect(tree).toMatchSnapshot();
});

describe('Shakshuka', () => {
	describe('when the openModal function is called', ()=>{
		   const spy = jest.spyOn(Shakshuka.prototype, 'openModal');
		   const app = shallow(<Shakshuka />);
		   it('calls the function', () => {
				app.find('.eggOne').simulate('click');
				expect(spy).toHaveBeenCalled()
		   });	   
	 });
	 describe('when the closeModal function is called', ()=>{
		const spy = jest.spyOn(Shakshuka.prototype, 'closeModal');
		const app = shallow(<Shakshuka />);
		it('calls the function', () => {
			 app.find('.shakshuka-button').simulate('click');
			 expect(spy).toHaveBeenCalled()
		});	   
  });	 	
})