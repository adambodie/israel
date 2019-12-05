import React from 'react'
import ReactDOM from 'react-dom'
import GamePlayers from '../../components/Game/GamePlayers'

it('renders without crashing', () => {
	const div = document.createElement('div')
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
        result={''}/>, div)
	ReactDOM.unmountComponentAtNode(div)
})


