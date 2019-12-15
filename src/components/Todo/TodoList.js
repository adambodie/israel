import React from 'react'
import { Row, Column } from 'react-foundation'
import ReactMarkdown from 'react-markdown'
import PrevNext from '../PrevNext'
import TodoListForm from './TodoListForm.js'
import TodoListItemList from './TodoListItemList.js'
import { Provider } from '../Context/todo'
import ReactTooltip from 'react-tooltip'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		todoIntro: state.todoIntro,
	}
}

const TodoList = ({ todoIntro }) => (
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

export default connect(mapStateToProps) (TodoList)