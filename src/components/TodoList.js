import React from 'react';
import { Row, Column } from 'react-foundation';
import ReactMarkdown from 'react-markdown';
import TodoListForm from './TodoListForm.js';
import TodoListItemList from './TodoListItemList.js';
import { intro } from '../data/todo';
import image from '../images/items.jpg';


const TodoList = () => {	
	return(
		<Row className="display grid-x todoList">
			<Column large={6} offsetOnLarge={3}>
			<h1>Things to Bring to Israel</h1>
				<ReactMarkdown source={intro} className="todoListIntro"/>
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


