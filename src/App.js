import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
		<Router>
			<div>
			<Header />
				<div className="App">
					<Route exact path="/" component={Landing} />
					<Route path="/index" component={Main} />
				</div>				
			</div>
		</Router>
    );
  }
}

export default App;
