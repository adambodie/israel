import React, { Component} from 'react';

export default class TodoList extends Component {
	constructor(){
		super();
		this.state = {
			items: ['Shirts', 'Pants', 'Passport', 'Shoes', 'Camera'],
			value: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);		
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleSubmit(event) {
		const newItems = [...this.state.items];
		if (this.state.value !== '') {
			newItems.push(this.state.value);
			this.setState(prevState =>({ 
				items: newItems, 
				value: '' 
			}));
		} else {
			alert("Please enter a value");
		};
		
		event.preventDefault();
	}
	render() {
		let listOfItems = this.state.items.map((x, index)=> <li key={index} className="item"><a href="/#">x</a> {x}</li>);
		return(
			<div>
				<h1>Things to Bring to Israel</h1>
					<ul className="todoList">
						{listOfItems}
					</ul>	
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.value} onChange={this.handleChange} />
					<input type="submit" value="Add Item" />
				</form>
			</div>
		)
  }
}


