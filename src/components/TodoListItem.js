import React, { Component } from 'react';
import { Consumer } from './Context/todo';
import { Link, Colors } from 'react-foundation';
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
					<Link color={Colors.ALERT} onClick={()=> handleRemove(items[index].id)} className="delete">X</Link>
					<p>{items[index].name}</p>
					{items[index].className === "item-completed" ? (
						<Link color={Colors.SUCCESS} onClick={()=> handleComplete(items[index].id)} className="complete">&#x2713;</Link>
					) : (
						<Link color={Colors.PRIMARY} onClick={()=> handleComplete(items[index].id)} className="complete">&#x2713;</Link>
					)}
				</li>
				)			
			}
		}
	</Consumer>
	)
}
}
