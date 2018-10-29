import React, { Component} from 'react';
import TodoListForm from './TodoListForm.js';
import TodoListItem from './TodoListItem.js';

export default class TodoList extends Component {
	constructor(){
		super();
		this.state = {
			items: [{name: 'Shirts', id: 1, className: 'item', count: 0},{name:'Pants', id: 2, className: 'item', count: 0}, {name:'Passport', id: 3, className: 'item', count: 0}, {name: 'Shoes', id: 4, className: 'item', count: 0}, {name:'Camera', id: 5, className: 'item', count: 0}],
			value: '',
		}
		this.onHandleChange = this.onHandleChange.bind(this);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);		
		this.onHandleRemove = this.onHandleRemove.bind(this);		
		this.onHandleComplete = this.onHandleComplete.bind(this);		
	}
	onHandleChange(value) {
		this.setState({value});
	}	
	onHandleComplete(index) {
		const newItems = [...this.state.items];
		let count = newItems[index - 1].count;
		count++;
		if (count % 2 === 1) {
			newItems.forEach((item) => {
				if (item.id === index) {
					item.className = "item-completed";
					item.count++;
				}				
				
			})
		} else {
			newItems.forEach((item) => {
				if (item.id === index) {
					item.className = "item";
					item.count++
				}
			})
		}
		this.setState({newItems});		
	}

	onHandleSubmit() {
		const newItems = [...this.state.items];
		if (this.state.value !== '') {
			newItems.push({name:this.state.value, id: this.state.items.length + 1, className: 'item', count: 0});
			this.setState(prevState =>({ 
				items: newItems, 
				value: '' 
			}));
		} else {
			alert("Please enter a value");
		};
	}
	onHandleRemove(index) {
		const newItems = [...this.state.items];
		newItems.splice(index - 1 , 1);
		newItems.forEach((item, index) => item.id = index + 1);
		this.setState(prevState =>({ items: newItems }));
	}		
	render() {		
		let listOfOtherItems = this.state.items.map((x, index) => {
			return(
				<TodoListItem id={x.id} 
							  key={x.id} 
							  className={x.className} 
							  name={x.name} 
							  onHandleRemove={this.onHandleRemove} 
							  onHandleComplete={this.onHandleComplete} 
							/>
					)
				}
			);
		return(
			<div>
				<h1>Things to Bring to Israel</h1>
					<ul className="todoListEdit">
						{listOfOtherItems}
					</ul>
					<TodoListForm onHandleChange={this.onHandleChange} onHandleSubmit={this.onHandleSubmit} value={this.state.value} />
			</div>
		)
  }
}


