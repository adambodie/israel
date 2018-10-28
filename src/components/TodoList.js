import React, { Component} from 'react';

export default class TodoList extends Component {
	constructor(){
		super();
		this.state = {
			items: [{name: 'Shirts', id: 1, className: 'item', count: 0},{name:'Pants', id: 2, className: 'item', count: 0}, {name:'Passport', id: 3, className: 'item', count: 0}, {name: 'Shoes', id: 4, className: 'item', count: 0}, {name:'Camera', id: 5, className: 'item', count: 0}],
			value: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);		
		this.handleRemove = this.handleRemove.bind(this);		
		this.handleComplete = this.handleComplete.bind(this);		
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}	
	handleComplete(index) {
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

	handleSubmit(event) {
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
		event.preventDefault();
	}
	handleRemove(index) {
		const newItems = [...this.state.items];
		newItems.splice(index - 1 , 1);
		newItems.forEach((item, index) => item.id = index + 1);
		this.setState(prevState =>({ items: newItems }));
	}		
	render() {		
		let listOfItems = this.state.items.map((x, index)=> {
			return(
				<li key={x.id} className={x.className}>
					<button onClick={()=>this.handleRemove(x.id)}>x</button> 
						<p onClick={()=>this.handleComplete(x.id)}>{x.name}</p>
				</li>
				)
			});
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


