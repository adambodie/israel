import React from 'react';

const Photo = ({id, title, index, length}) => (
  <div>
        <img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/IMG_${id}.JPG`} alt={title}/>
		<h3>{title}</h3>
		<p>{index} of {length}</p>
  </div>
);

export default Photo;
