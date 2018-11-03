import React from 'react';
import { Row, Column } from 'react-foundation';
import TodoListForm from './TodoListForm.js';
import TodoListItemList from './TodoListItemList.js';
import image from '../images/items.jpg';


const TodoList = () => {	
	return(
		<Row className="display grid-x todoList">
			<Column large={6} offsetOnLarge={3}>
			<h1>Things to Bring to Israel</h1>
				<p className="todoListIntro">Before going to Israel, one must pack items to take with them.  Some things are automatic, like clothing.  Other things are required to enter, like your Passport.  Everything else is optional depending on your taste.  With that, feel free to add, remove and check off any items you'd like to bring!</p>
				<img src={image} alt='bunch of items'/>
				<ul>
					<TodoListItemList />
				</ul>
				<TodoListForm />
			</Column>
		</Row>	
	)
}

export default TodoList;


