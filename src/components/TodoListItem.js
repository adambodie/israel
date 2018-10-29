import React, { Component} from 'react';
import PropTypes from 'prop-types';

export default class TodoListItem extends Component {

	handleComplete(e) {
		this.props.onHandleComplete(e);
	}

	handleRemove(e) {
		this.props.onHandleRemove(e);
	}		
	render() {
		const {id, className, name} = this.props;		
		return(
				<li key={id} className={className}>
					<button onClick={()=> this.handleRemove(id)}>x</button> 
					<p onClick={()=> this.handleComplete(id)}>{name}</p>
				</li>
		)
	}
}

TodoListItem.propTypes = {
	id: PropTypes.number,
	className: PropTypes.string,
	name: PropTypes.string,
	onClick: PropTypes.func
}
