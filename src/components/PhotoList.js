import React, { Component } from 'react';
import Slider from 'react-slick';
import Photo from './Photo';

export default class PhotoList extends Component {
	render() {
		const { data, page, color } = this.props;
		const settings = {
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return(
			<Slider ref={c => this.slider = c } {...settings}>
				{data.map((x, index) =>
					<div key={x.id}>
						<Photo farm={x.farm} server={x.server} id={x.id} secret={x.secret} title={x.title} index={index + 1} length={page} color={color}/>
					</div>
				)}
			</Slider>
		);
	}
}
