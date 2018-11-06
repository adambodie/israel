import React from 'react';
import { Consumer } from './Context/todo';
import TodoListItem from './TodoListItem';

const TodoListItemList = () => {
	return(
		<Consumer>
		{ ({ items }) => (
			<React.Fragment>
				{items.map((item, index) =>
					<TodoListItem 
						key={item.id.toString()}
						index={index}
					/>	
				)}
			</React.Fragment>
			)
		}
		</Consumer>
	);
}

export default TodoListItemList;
