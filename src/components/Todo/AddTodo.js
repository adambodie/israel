import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/todo'

const mapDispatchToProps = { addTodo }

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = { input: "" }
    }

    updateInput = input => {
        this.setState({ input })
    }

    handleAddTodo = (e) => {
        this.props.addTodo(this.state.input)
        this.setState({ input: "" })
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleAddTodo} className='form'>
                <input type='text' onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
                <input className='button' type='submit' value='Add Item' />
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps )(AddTodo)