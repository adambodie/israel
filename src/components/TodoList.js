import React from 'react';
import TodoListForm from './TodoListForm.js';
import TodoListItemList from './TodoListItemList.js';

const TodoList = () => {	
	return(
		<div>
			<h1>Things to Bring to Israel</h1>
				<ul className="todoListEdit">
					<TodoListItemList />
				</ul>
				<TodoListForm />
		</div>
	)
}

export default TodoList;


