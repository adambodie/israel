import React, { Component} from 'react'
import { Row } from 'react-foundation'
import axios from 'axios'
import CatPost from './CatPost'
import CatList from './CatList'
import PrevNext from '../PrevNext'

export default class Cat extends Component {
	constructor() {
		super()
		this.state = {
			cats: [],
			image: ''
		}
	}
	componentDidMount() {
		axios.get('https://api.giphy.com/v1/gifs/search?api_key=9QkF2zr9JlrtO77ouF5NhuLQ348t4vAJ&q=cat&limit=500')
			.then(response => {
				this.setState({
					cats: response.data.data
				})
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error)
			})
		}

	render() {
		const { cats, image } = this.state
		return (
			<div className='cat post'>
				<h1>Cats: The True Story</h1>
				<Row className='display grid-x'>
					<CatPost />
					<CatList cats={cats} image={image} />
				</Row>
				<PrevNext prev={'/game'} next={'/jaffa'} />
			</div>
		)
	}
}