import React, { Component} from 'react';
import PropTypes from 'prop-types';

export default class TodoListForm extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	
	}
	handleChange(e) {
		this.props.onHandleChange(e.target.value);
	}	

	handleSubmit(e) {
		this.props.onHandleSubmit(e.target.value);
		e.preventDefault();
	}		
	render() {
		const {value} = this.props;		
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={value} onChange={this.handleChange} />
				<input type="submit" value="Add Item" />
			</form>
		)
  }
}

TodoListForm.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func
}
