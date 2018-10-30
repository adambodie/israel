import React, { Component } from 'react';
import { Consumer } from './Context';
import PropTypes from 'prop-types';

export default class TodoListItem extends Component {
	static propTypes = {
		index: PropTypes.number.isRequired,
	}
	render() {
		const { index } = this.props;
		return(
		<Consumer>
			{ ({ actions, items }) => {
				const handleComplete =(e) => actions.onHandleComplete(e);
				const handleRemove = (e) => actions.onHandleRemove(e);			

				return(
				<li key={items[index].id} className={items[index].className}>
					<button onClick={()=> handleRemove(items[index].id)} className="delete">x</button> 
					<p className="tooltip" onClick={()=> handleComplete(items[index].id)}>
						{items[index].name}
						<span className="tooltiptext">Click to Mark Complete</span>
					</p>
				</li>
				)			
			}
		}
	</Consumer>
	)
}
}
