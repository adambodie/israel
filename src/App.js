import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.css';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
		<Router>
			<div>
				<header>
					<div className="top-bar">
						<div className="top-bar-left">
							<h4>Adam's Birthright Trip to Israel</h4>
						</div>
					</div>
				</header>
				<div className="App">
					<Route exact path="/" component={Landing} />
				</div>				
			</div>
		</Router>
    );
  }
}

export default App;
