import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import GamePlayers from '../components/Game/GamePlayers';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<GamePlayers opponentScore={0} 
        playerScore={0} 
        playerWin={0} 
        opponentWin={0} 
        draw={0} 
        start={false}
        buttons={[
                {name: 'rock', id: 0},			
                {name: 'paper', id: 1},
                {name: 'scissors', id: 2}
        ]} 
        /*handleChange={this.handleClick}
        buttons={this.state.buttons}*/
        result={''}/>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
	const tree = renderer.create(
      <GamePlayers 
      opponentScore={0} 
      playerScore={0} 
      playerWin={0} 
      opponentWin={0} 
      draw={0} 
      start={false} 
      /*handleChange={this.handleClick}
      buttons={this.state.buttons}*/
      result={''} 
      />
  ).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders a `h2`', () => {
        const wrapper = mount(<GamePlayers
                opponentScore={0} 
                playerScore={0} 
                playerWin={0} 
                opponentWin={0} 
                draw={0}
                start={false}
                buttons={[
                        {name: 'rock', id: 0},
                        {name: 'paper', id: 1},
                        {name: 'scissors', id: 2}
                ]}  
                 />);
        expect(wrapper.find('h2').length).toEqual(1);
 });
