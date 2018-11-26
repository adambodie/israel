import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import './styles/App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Main from './components/Main/Main';
import TodoList from './components/Todo/TodoList';
import Post from './components/Post';
import { elAl } from './data/main';

const App = () => {
    return (
		<Router>
			<div>
			<Header />
			<ScrollToTop >
				<div className="App">
					<Route exact path="/" component={Landing} />
					<Route path="/index" component={Main} />
					<Route path="/todoList" component={TodoList} />
					<Route path="/el-al" render={() => <Post title="El Al: The Beginning of the Trip to Israel" paragraph={elAl} data={"https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/data/el-al.json"}/>}  />
				</div>
			</ScrollToTop>			
			</div>
		</Router>
    );
}

export default App;
