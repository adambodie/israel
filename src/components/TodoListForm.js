import React from 'react';
import { Consumer } from './Context';

const TodoListForm = () => {
	return(
		<Consumer>
			{ ({ actions, items, value }) => {
				const handleChange = (e) => actions.onHandleChange(e.target.value);
				const handleSubmit = (e) => {
					actions.onHandleSubmit(e.target.value);
					e.preventDefault();
				}
				return(
					<form onSubmit={handleSubmit} className="form">
						<input type="text" value={value} onChange={handleChange} />
						<input className ="button" type="submit" value="Add Item" />
					</form>
				)			
			}
		}
	</Consumer>
	)
}
export default TodoListForm;

