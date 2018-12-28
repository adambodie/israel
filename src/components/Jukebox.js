import React from 'react';
import { Row, Column } from 'react-foundation';

const songs = [
	{title: 'Tel Aviv', src: 'nMQw29nfzpg'},
	{title: 'Juicy', src: '_JZom_gVfuw'},	
	{title: 'Take Me Home Country Roads', src: '1vrEljMfXYo'},	
	{title: 'All Star', src: 'L_jWHffIx5E'},
	{title: 'American Idiot', src: 'Ee_uujKuJMI'},
	{title: 'Tiny Dancer', src: 'yYcyacLRPNs'},
	{title: 'Don\'t Stop Believin\'', src: '1k8craCGpgs'}	
]
const Jukebox = () => {
  return (
		<Row className="display grid-x big-jukebox">
			<Column medium={6} offsetOnMedium={3}>
			<div className="jukebox">
				<h1>Sababa!</h1>
			</div>
			</Column>
			<Column medium={6} offsetOnMedium={3} className="playlist">
				{songs.map((x, index) => <iframe title={x.title} key={index}  src={`https://www.youtube.com/embed/${x.src}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)}
			</Column>
		</Row>

  );
};

export default Jukebox;
