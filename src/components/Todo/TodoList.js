import React from 'react';
import { Row, Column } from 'react-foundation';
import ReactMarkdown from 'react-markdown';
import TodoListForm from './TodoListForm.js';
import TodoListItemList from './TodoListItemList.js';
import { intro } from '../../data/main';
import { Provider } from '../Context/todo';
import ReactTooltip from 'react-tooltip'


const TodoList = () => {	
	return(
		<Provider>
			<Row className="display grid-x todoList">
				<Column large={6} offsetOnLarge={3}>
					<h1>Things to Bring to Israel</h1>
					<ReactMarkdown source={intro} className="todoListIntro"/>
					<img src={'https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/items.jpg'} alt='bunch of items' data-tip="A Bunch of Items (Not all of these items are needed for this trip)"/>
					<ReactTooltip />
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


