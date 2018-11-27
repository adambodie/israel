import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import './styles/App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Main from './components/Main/Main';
import TodoList from './components/Todo/TodoList';
import Post from './components/Posts/Post';
import routes from './data/routes';

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
					{routes.map((x, index) => <Route key={index} path={`/${x.link}`} render={() => <Post title={x.title} paragraph={x.paragraph} data={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/data/${x.link}.json`}/>}  />)}
				</div>
			</ScrollToTop>			
			</div>
		</Router>
    );
}

export default App;
