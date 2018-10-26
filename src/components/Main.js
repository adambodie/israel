import React, { Component} from 'react';
import Scrollspy from 'react-scrollspy'
import TodoList from './TodoList';

export default class Main extends Component {
	
	constructor() {
		super();
		this.state ={
			items: ['day-1', 'day-2', 'day-3'],
			pages: [1,2,3]
		}
	}
	render() {
    const style = {
      minHeight: '600px',
    }
    
    const listItems = this.state.pages.map((x)=> { 
		return(
			<li className="c-side-nav__item" key={x}>
				<a href={`#day-${x}`} className="c-side-nav__link">Day {x}</a>
			</li>)
		});
	const pageItems = this.state.pages.map((x) => {
		return (
				<section key={x} className="o-content" style={ style } id={`day-${x}`}>
					<div className="o-content__inner">
						<div className="o-content__inner-head">
							<h2 className="c-heading-4 c-heading-4--upper">Day {x}</h2>
						</div>
						<div className="o-content__inner-body">
							<img src='http://placehold.it/600x450' alt='placehold'/>
						</div>
					</div>
				</section>
		)
	});
	return(
		<div className="o-wrapper">
			<div className="o-sidebar o-sidebar--fixed-left c-side-nav">
				<nav className="c-side-nav__body">
					<Scrollspy items={ this.state.items } currentClassName="is-current" className="c-side-nav__list nav-list">
						{listItems}
					</Scrollspy>
				</nav>
			</div>
			<div className="o-main o-main--with-sidebar o-main--fixed-left-sidebar">
				<div className="container" style={{"marginTop": 59}}>
					<section style={ style }>
						<div className="o-hero u-align-left">
							<h1 className="c-heading-4 c-heading-4--upper headline">Welcome</h1>
							<img src='http://placehold.it/600x450' alt='placehold'/>
						</div>
						<TodoList/>
					</section>
					{pageItems}
				</div>
			</div>
      </div>
    )
  }
}


