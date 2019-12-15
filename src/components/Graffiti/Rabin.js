import React from 'react'
import { Column } from 'react-foundation'
import { connect } from 'react-redux'
import { hoverOn, hoverOff } from '../../store/actions/rabin'


const mapStateToProps = state => {
	return {
		hoverRabin: state.hoverRabin,
	}
}

const mapDispatchToProps = { hoverOn, hoverOff }

const Rabin = ({ hoverRabin, hoverOn, hoverOff }) => (
	<Column>
		<h1>The Most Important Piece of Graffiti in Tel Aviv</h1>
		<div className='rabin'>
			<img id='rabin1' src={`/assets/main/rabin-photo.jpg`} alt='Rabin Photograph' />
			<img id='rabin2' src={`/assets/main/rabin-painting.jpg`} alt='Rabin Painting' className={hoverRabin.className} onMouseOver={hoverOn} onMouseLeave={hoverOff} />
		</div>
		<p>This piece of graffiti, as you hover over the image above, shows it is a painting of an actual photograph.  That photograph depicts the exact moment when Prime Minister Yitzhak Rabin was assassinated in 1995.  When someone attempted to paint over this mural, people got upset and started protesting.  Since then, it has been declared protected.</p>
	</Column>
)


export default connect(mapStateToProps, mapDispatchToProps)(Rabin)