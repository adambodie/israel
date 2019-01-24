import React from 'react';
import { imageLink } from '../../data/articles';

const Photo = ({id, title, index, length}) => (
	<div>
		<img src={`${imageLink}/IMG_${id}.JPG`} alt={title}/>
		<h3>{title}</h3>
		<p>{index} of {length}</p>
  </div>
);

export default Photo;
