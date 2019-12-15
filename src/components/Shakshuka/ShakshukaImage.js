import React from 'react'

const ShakshukaImage = ({title, image}) => (
	<React.Fragment>
		<h2>{title}</h2>
		<img className='thumbnail' src={`/assets/photos/IMG_45${image}.JPG`} alt={title}/>
	</React.Fragment>
)

export default ShakshukaImage
