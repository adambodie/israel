import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Main from './components/Main/Main';
import TodoList from './components/Todo/TodoList';

const App = () => {
    return (
		<Router>
			<div>
			<Header />
				<div className="App">
					<Route exact path="/" component={Landing} />
					<Route path="/index" component={Main} />
					<Route path="/todoList" component={TodoList} />
				</div>				
			</div>
		</Router>
    );
}

export default App;
