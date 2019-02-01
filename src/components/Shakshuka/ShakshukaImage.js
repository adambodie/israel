import React from 'react';
import { imageLink } from '../../data/articles';

const ShakshukaImage = ({title, image}) => {
    return (
		<React.Fragment>
			<h2>{title}</h2>
			<img className='thumbnail' src={`${imageLink}/IMG_45${image}.JPG`} alt={title}/>
		</React.Fragment>
    )
}
export default ShakshukaImage;
