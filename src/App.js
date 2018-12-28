import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import './styles/App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Shakshuka from './components/Shakshuka';
import NoMatch from './components/NoMatch';
import Main from './components/Main/Main';
import Game from './components/Game/Game';
import Jukebox from './components/Jukebox';
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
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/index" component={Main} />
						<Route path="/todoList" component={TodoList} />
						<Route path="/shakshuka" component={Shakshuka} />
						<Route path="/game" component={Game} />
						<Route path="/jukebox" component={Jukebox} />
						{routes.map((x, index) =>
							<Route 
								key={index} 
								path={`/${x.link}`} 
								render={() => 
									<Post 
										title={x.title}
										paragraph={x.paragraph} 
										data={`https://s3-us-west-2.amazonaws.com/birthright-israel.bodiewebdesign.com/data/${x.link}.json`}
										prev={`/${x.prev}`}
										next={`/${x.next}`}
										begin={x.begin} 
										end={x.end} 
										number={x.number}
										map={x.map}
										locations={x.locations}
										locationName={x.locationName}							
									/>}  
								/>
							)
						}
						<Route component={NoMatch} />
					</Switch>
				</div>
			</ScrollToTop>			
			</div>
		</Router>
    );
}

export default App;
