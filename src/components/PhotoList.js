import React, { Component } from 'react';
import Slider from 'react-slick';
import Photo from './Photo';

export default class PhotoList extends Component {
	render() {
		const { data } = this.props;
		const settings = {
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return(
			<Slider ref={c => this.slider = c } {...settings}>
				{data.map((x, index) =>
					<div key={x.id}>
						<Photo id={x.id} title={x.title} index={index + 1} />
					</div>
				)}
			</Slider>
		);
	}
}
