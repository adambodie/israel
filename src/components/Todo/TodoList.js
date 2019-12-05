import React from 'react'
import { Row, Column } from 'react-foundation'
import ReactMarkdown from 'react-markdown'
import PrevNext from '../PrevNext'
import TodoListForm from './TodoListForm.js'
import TodoListItemList from './TodoListItemList.js'
import { todoIntro } from '../../data/articles'
import { Provider } from '../Context/todo'
import ReactTooltip from 'react-tooltip'


const TodoList = () => (
	<Provider>
		<Row className='display grid-x todoList article'>
			<Column large={6} offsetOnLarge={3}>
				<h1>Things to Bring to Israel</h1>
				<ReactMarkdown source={todoIntro} className='todoListIntro'/>
				<img src={`/assets/main/items.jpg`} alt='bunch of items' data-tip='A Bunch of Items (Not all of these items are needed for this trip)'/>
				<ReactTooltip />
				<TodoListItemList />
				<TodoListForm />
				<PrevNext prev={'/index'} next={'/el-al'} />
			</Column>
		</Row>
	</Provider>
)

export default TodoList