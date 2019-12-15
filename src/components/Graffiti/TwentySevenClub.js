import React, { Component } from 'react'
import TwentySevenModal from './TwentySevenModal'
import { Column } from 'react-foundation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { show } from 'redux-modal'

const mapStateToProps = state => {
	return {
		members: state.members
	}
}

class TwentySevenClub extends Component {
	handleOpen = name => () => {
		this.props.show(name, { name: `${name}` })
	}
	render() {
		const { members } = this.props
		return (
			<Column>
				<h1>The 27 Club</h1>
				<div className='club'>
					<img src='/assets/main/27-club.jpg' alt='27 Club' className='club-image'/>
					{members.map((x, index) => (
						<React.Fragment  key={index}>
						<button key={index} data-testid={`club-cover cover-${x.className}`} 
							className={`club-cover cover-${x.className}`} 
							onClick={this.handleOpen(x.name)}>
						</button>
						<TwentySevenModal name={x.name}/>
						</React.Fragment>
						)
					)}
				</div>
				<p>The 27 Club is an informal club of famous artists who all passed away at the age of 27 years old.  Click on each person to see which famous artist is depicted.  The last person on the right is the creator of the mural, graffiti artist Jonathan Kis-Lev, who came up with the idea of this mural at 26 years old, fearing he'd join the club.  There are rumors regarding why his face is covered in pink paint and who covered it in pink. Kis-Lev, with the help of other artists, painted this within two days, with the use of the crane they rented.  In order to avoid being caught, they completed the mural on Shabbat, claiming a permit, to keep police from calling to check on the permit they didn't have.</p>
			</Column>
		)
	}
}

export default connect(mapStateToProps, dispatch => bindActionCreators({ show }, dispatch))(TwentySevenClub)