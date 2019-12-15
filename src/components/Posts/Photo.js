import React from 'react'

const Photo = ({id, title, index, length}) => (
	<React.Fragment>
		<img src={`/assets/photos/IMG_${id}.JPG`} alt={title}/>
		<h3>{title}</h3>
		<p>{index} of {length}</p>
	</React.Fragment>
)

export default Photo
