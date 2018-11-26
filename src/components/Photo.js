import React from 'react';

const Photo = ({id, title, index}) => (
  <div>
        <img src={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/IMG_${id}.JPG`} alt={title}/>
		<p>{title}</p>
  </div>
);

export default Photo;
