import React, { Component} from 'react'
import { Row, Column } from 'react-foundation'
import ShakshukaModal from './ShakshukaModal'
import ShakshukaText from './ShakshukaText'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { show } from 'redux-modal'

const mapStateToProps = state => {
	return {
		eggs: state.eggs
	}
}

class Shakshuka extends Component {
	handleOpen = (name, index) => () => {
		this.props.show(name, { title: `${name}`, image: `${index}` })
	  }
	render() {
		const { eggs } = this.props
		return (
			<Row className='display grid-x shakshuka'>
				<Column large={8} offsetOnLarge={2}>
					<h1>How Not to Enjoy Your Shakshuka</h1>
					<div className='tomato'>
						{eggs.map((x, index) => (
							<React.Fragment  key={index}>
							<div 
								data-testid={'egg ' + x.class} 
								className={'egg ' + x.class} 
								onClick={this.handleOpen(x.title, x.image)}
								>
							</div>
							<ShakshukaModal name={x.title} image={x.image} />
							</React.Fragment>
							))
						}
					</div>
					<ShakshukaText />
				</Column>
		</Row>
		)
	}
}

export default connect(mapStateToProps, dispatch => bindActionCreators({ show }, dispatch))(Shakshuka)

