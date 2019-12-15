import React from 'react'
import JukeboxItem from './JukeboxItem'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		songs: state.songs,
	}
}

let cards = []
const JukeboxList = ({ songs }) => {
	songs.forEach((y, index) => cards.push(<JukeboxItem data={y} key={index}/>))
	return (
		<div className='jukebox-flex'>
			{cards}
		</div>
	)
}

export default connect(mapStateToProps) (JukeboxList)