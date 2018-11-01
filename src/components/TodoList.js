import React from 'react';
import TodoListForm from './TodoListForm.js';
import TodoListItemList from './TodoListItemList.js';

const TodoList = () => {	
	return(
		<div className="todoList">
			<div>
			<h1>Things to Bring to Israel</h1>
				<p className="todoListIntro">Before going to Israel, one must pack items to take with them.  Some things are automatic, like clothing.  Other things are required to enter, like your Passport.  Everything else is optional depending on your taste.  With that, feel free to add, remove and check off any items you'd like to bring!</p>
				<img src='http://placehold.it/600x450' alt='placehold'/>
				<ul>
					<TodoListItemList />
				</ul>
				<TodoListForm />
			</div>
		</div>
	)
}

export default TodoList;


