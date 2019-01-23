import React from 'react';
import { Row, Column } from 'react-foundation';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import TodoListForm from './TodoListForm.js';
import TodoListItemList from './TodoListItemList.js';
import { todoIntro } from '../../data/articles';
import { Provider } from '../Context/todo';
import ReactTooltip from 'react-tooltip'


const TodoList = () => {
	return(
		<Provider>
			<Row className='display grid-x todoList article'>
				<Column large={6} offsetOnLarge={3}>
					<h1>Things to Bring to Israel</h1>
					<ReactMarkdown source={todoIntro} className='todoListIntro'/>
					<img src={'https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/images/main/items.jpg'} alt='bunch of items' data-tip='A Bunch of Items (Not all of these items are needed for this trip)'/>
					<ReactTooltip />
					<ul>
						<TodoListItemList />
					</ul>
					<TodoListForm />
					<div className='prev-next'>
						<Link to={ '/index' } className='custom-button'>Prev</Link>
						<Link to={ '/el-al' } className='custom-button'>Next</Link>
					</div>
				</Column>
			</Row>
		</Provider>	
	)
}

export default TodoList;


