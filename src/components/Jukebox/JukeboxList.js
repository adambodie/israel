import React, { Component } from 'react';
import JukeboxItem from './JukeboxItem';

export default class JukeboxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
					{title: 'Tel Aviv', src: 'nMQw29nfzpg'},
					{title: 'Juicy', src: '_JZom_gVfuw'},
					{title: 'Take Me Home Country Roads', src: '1vrEljMfXYo'},
					{title: 'Tiny Dancer', src: 'yYcyacLRPNs'},
					{title: 'Bohemian Rhapsody', src: 'fJ9rUzIMcZQ'},
					{title: 'American Idiot', src: 'Ee_uujKuJMI'},
					{title: 'All Star', src: 'L_jWHffIx5E'},
					{title: 'Stacy\'s Mom', src: 'dZLfasMPOU4'},
					{title: 'I Want It That Way', src: '4fndeDfaWCg'},
					{title: 'Don\'t Stop Believin\'', src: '1k8craCGpgs'},
					{title: 'Understood', src: '4dV4QC9qzBs'}
				]
			};
		}
	render() {
		let cards = [];
		this.state.data.forEach((y, index) => cards.push(<JukeboxItem data={y} key={index}/>));
		return (
			<div className='jukebox-flex'>
				{cards}
			</div>
		);
	}
};

