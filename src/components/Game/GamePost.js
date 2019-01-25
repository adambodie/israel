import React from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';

const GamePost = () => {
	return (
		<Row className='display grid-x game-text post'>
			<Column large={6} offsetOnLarge={3}>
				<h1>The Rock Paper Scissors Episode</h1>
				<p>Rock, Paper, Scissors.  A classic game of chance where two people face off and select either Rock, Paper or Scissors.  You all know the rules:  Rock smashes Scissors.  Scissors cuts Paper.  Paper covers Rock.  You either win, you lose, or you tie.  So what does this have to do with the trip?</p>
				<p>Our first activity for the evening, for some reason, was to challenge someone to Rock, Paper, Scissors, with the loser cheering the winner's name.  The winner then challenged another winner all the while your previous opponent chanting your name until there were just two people left to challenge for supremacy.</p>
				<p>I found myself completely going through the motions, not really knowing what the heck was going on, not really paying any attention to the objective of this game or where it would end.  But before I knew it, I somehow found myself in the final match, against Boris, the security guard.  I certainly didn't think much of it, but all I could hear was my name being chanted: 'Adam, Adam, Adam!'  Suddenly, I realized what was going on.</p>
				<p>It went to a Round of Three.  Boris won the first round, but I won the second round.  Could I pull off the Rocky over Drago victory in the final round?  Sadly, no... Boris won, perhaps due to luck, perhaps due to Russian Interference.  But there was no prize money, no medals, no rugelach (I would have gladly taken that!), but I was the People's Champ!  And that, my friend, is why we play Rock, Paper, Scissors here.  Enjoy!</p>
				<div className='prev-next'>
					<Link to={ '/kibbutz' } className='custom-button'>Prev</Link>
					<Link to={ '/cat' } className='custom-button'>Next</Link>
				</div>
			</Column>
		</Row>
	);
};

export default GamePost;
