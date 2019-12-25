import React from 'react'
import { connect } from 'react-redux'
import { Link, Colors } from 'react-foundation'
import { toggleTodo, removeTodo } from '../../store/actions/todo'

const mapDispatchToProps = { toggleTodo, removeTodo }

const Todo = ({ todo, toggleTodo, removeTodo }) => (
    <li className={todo && todo.completed ? ('item-completed'): ('item')}>
        <Link  color={Colors.ALERT} className='delete' onClick={() => removeTodo(todo.id)}>X</Link>
        <p>{todo.content}</p>
        <Link 
            color={todo && todo.completed ? (Colors.SUCCESS): (Colors.PRIMARY)} 
            className='complete' 
            onClick={() => toggleTodo(todo.id)}>&#x2713;
        </Link>        
    </li>
)

export default connect(null, mapDispatchToProps )(Todo);