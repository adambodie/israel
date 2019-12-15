import React, { Component } from 'react'
import { Column } from 'react-foundation'

export default class CatList extends Component {
	constructor() {
		super()
		this.shuffle = this.shuffle.bind(this)
	}
	shuffle (array) {
		let currentIndex = array.length, temporaryValue, randomIndex
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex -= 1
			temporaryValue = array[currentIndex]
			array[currentIndex] = array[randomIndex]
			array[randomIndex] = temporaryValue
		}
		return array
	}
	render() {
		const { cats } = this.props
		return (
			<Column large={6} offsetOnLarge={3}>
				<h1>Cats, Cats, Cats!!!</h1>
				<p>Enjoy the Cat gifs below, or click Refresh to load new gifs</p>
				<div className='cat-gifs'>
					{this.shuffle(cats).filter((x, index) => index < 9).map((x, index) => (
						<div key={index} className='cat-gif'>
							<img src={x.images.fixed_height.url} alt='Cat'/>
						</div>
						)
					)}
				</div>
			</Column>
		)
	}
}
