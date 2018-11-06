import React from 'react';
import { Row, Column } from 'react-foundation';
import ReactMarkdown from 'react-markdown';
import TodoListForm from './TodoListForm.js';
import TodoListItemList from './TodoListItemList.js';
import { intro } from '../data/main';
import image from '../images/items.jpg';
import { Provider } from './Context/todo';



const TodoList = () => {	
	return(
		<Provider>
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
		</Provider>	
	)
}

export default TodoList;


