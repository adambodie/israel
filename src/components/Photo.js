import React from 'react';

const Photo = ({farm, server, id, secret, title, index}) => (
  <div>
        <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`} alt={title}/>
		<p>{title}</p>
  </div>
);

export default Photo;
