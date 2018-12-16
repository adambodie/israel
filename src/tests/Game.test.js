import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Game from '../components/Game/Game';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Game />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(<Game />).toJSON();
	expect(tree).toMatchSnapshot();
});



describe('Game', () => {
	describe('when the button is clicked', ()=>{
		   const spy = jest.spyOn(Game.prototype, 'handleClick');
		   const app = shallow(<Game />);
		   it('calls the function', () => {
				app.find('.button-rock').simulate('click');
				expect(spy).toHaveBeenCalled()
		   });
		   it('calls the function', () => {
				app.find('.button-paper').simulate('click');
				expect(spy).toHaveBeenCalled()
			});
			it('calls the function', () => {
				app.find('.button-scissors').simulate('click');
				expect(spy).toHaveBeenCalled()
			});
	});
	describe('when the reset button is clicked', ()=>{
		const spy = jest.spyOn(Game.prototype, 'handleReset');
		const app = shallow(<Game />);
		it('calls the function', () => {
			 app.find('.reset').simulate('click');
			 expect(spy).toHaveBeenCalled()
		});

 });	
})
