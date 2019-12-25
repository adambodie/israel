import React from 'react'
import Slider from 'react-slick'
import Photo from './Photo'

const settings = {
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1
}

const PhotoList = ({data}) => (
	<Slider {...settings}>
		{data.map((x, index) =>
			<div key={x.id}>
				<Photo id={x.id} title={x.title} index={index + 1} length={data.length}/>
			</div>
		)}
	</Slider>
)
export default PhotoList