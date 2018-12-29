import React from 'react';
import ScrollArea from 'react-scrollbar';

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
		<div className="jukebox">
			<div className="jukebox-title">
				<h1>Sababa!</h1>
			</div>
			<ScrollArea
				speed={0.8}
				className="area"
				contentClassName="content"
				horizontal={false}
				>
				{songs.map((x, index) => <iframe title={x.title} key={index}  src={`https://www.youtube.com/embed/${x.src}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)}
			</ScrollArea>
			<div className="legs">
				<div className="leg"></div>
				<div className="leg"></div>
			</div>
		</div>
  );
};

export default Jukebox;
