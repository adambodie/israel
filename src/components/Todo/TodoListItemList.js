import React from 'react'
import { Consumer } from '../Context/todo'
import TodoListItem from './TodoListItem'

const TodoListItemList = () => (
	<Consumer>
		{ ({ items }) => (
			<ul>
				{items.map((item, index) => <TodoListItem key={item.id.toString()} index={index}/>)}
			</ul>
			)
		}
	</Consumer>
)

export default TodoListItemList