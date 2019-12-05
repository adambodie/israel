import React, {Component} from 'react'

const TodoListContext = React.createContext()

export class Provider extends Component {
	state = {
		items: [
					{name: 'Shirts', id: 1, className: 'item', count: 0},
					{name:'Pants', id: 2, className: 'item', count: 0}, 
					{name:'Passport', id: 3, className: 'item', count: 0}, 
					{name: 'Shoes', id: 4, className: 'item', count: 0}, 
					{name:'Camera', id: 5, className: 'item', count: 0}
			],
		value: '',
	}		
	onHandleChange = (value) => {
		this.setState({value})
	}	
	onHandleComplete = (index) => {
		const newItems = [...this.state.items]
		let count = newItems[index - 1].count
		count++
		if (count % 2 === 1) {
			newItems.forEach((item) => {
				if (item.id === index) {
					item.className = 'item-completed'
					item.count++
				}				
				
			})
		} else {
			newItems.forEach((item) => {
				if (item.id === index) {
					item.className = 'item'
					item.count++
				}
			})
		}
		this.setState({newItems})		
	}
	
	onHandleSubmit = () => {
		const newItems = [...this.state.items]
		if (this.state.value !== '') {
			newItems.push({name:this.state.value, id: this.state.items.length + 1, className: 'item', count: 0})
			this.setState(prevState =>({ 
				items: newItems, 
				value: '' 
			}))
		} else {
			alert('Please enter a value')
		}
	}
	
	onHandleRemove = (index) => {
		const newItems = [...this.state.items]
		newItems.splice(index - 1 , 1)
		newItems.forEach((item, index) => item.id = index + 1)
		this.setState(prevState =>({ items: newItems }))
	}
	
	render() {
		return(
				<TodoListContext.Provider value={{
					items: this.state.items,
					value: this.state.value,
					actions: {
						onHandleSubmit: this.onHandleSubmit,
						onHandleChange: this.onHandleChange,
						onHandleComplete: this.onHandleComplete,
						onHandleRemove: this.onHandleRemove
					}
				}}>
					{this.props.children}
				</TodoListContext.Provider>
		)
	}	
}

export const Consumer = TodoListContext.Consumer
