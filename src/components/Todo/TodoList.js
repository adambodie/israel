import React from 'react'
import { connect } from 'react-redux'
import { Row, Column } from 'react-foundation'
import ReactMarkdown from 'react-markdown'
import PrevNext from '../PrevNext'
import Todo from './Todo'
import AddTodo from './AddTodo'
import ReactTooltip from 'react-tooltip'

const TodoList = ({ todos }) => (
	<Row className='display grid-x todoList article'>
		<Column large={6} offsetOnLarge={3}>
			<h1>Things to Bring to Israel</h1>
			<ReactMarkdown 
				source={`Before going to Israel, one must pack items to take with them.  Some things are automatic, like clothing.  Other things are required to enter, like your Passport.  Everything else is optional depending on your taste.  With that, feel free to add, remove and check off any items you'd like to bring!`} className='todoListIntro'/>
				<img src={`/assets/main/items.jpg`} alt='bunch of items' data-tip='A Bunch of Items (Not all of these items are needed for this trip)'/>
				<ReactTooltip />
  				<ul className='todo-list'>
    				{todos && todos.length ? todos.map((todo, index) => <Todo key={`todo-${todo.id}`} todo={todo} />)
     			: <li className="item no-item">No items yet</li>}
  				</ul>
  		<AddTodo />
		<PrevNext prev={'/index'} next={'/el-al'} />
		</Column>
	</Row>
)

const mapStateToProps = state => {
   const { byIds, allIds } = state.todos || {}
   const todos =
     allIds && state.todos.allIds.length
       ? allIds.map((id, index) => (byIds ? { ...byIds[index], id } : null))
       : null
   return { todos }
 }

export default connect(mapStateToProps)(TodoList)
