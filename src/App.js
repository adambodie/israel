import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './styles/App.css';
import Landing from './components/Landing';
import Main from './components/Main/Main';
import Post from './components/Posts/Post';
import TodoList from './components/Todo/TodoList';
import Shakshuka from './components/Shakshuka';
import Cat from './components/Cat/Cat';
import Game from './components/Game/Game';
import Jukebox from './components/Jukebox/Jukebox';
import NoMatch from './components/NoMatch';
import routes from './data/routes';

const getMobileOperatingSystem = () => {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	  // Windows Phone must come first because its UA also contains "Android"
	  if (/windows phone/i.test(userAgent)) {
		  return "Windows Phone";
	  }
	  if (/android/i.test(userAgent)) {
		  return "Android";
	  }	  
	  // iOS detection
	  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		  return "iOS";
	  }	  
	  return "unknown";
  }

let className = 'App';


if (getMobileOperatingSystem() !== 'unknown') {
	className = className + ' mobile'
}
const App = () => {
    return (
		<Router>
			<div>
				<ScrollToTop >
					<div className={className}>
						<Switch>
							<Route exact path='/' component={Landing} />
							<Route path='/index' component={Main} />
							<Route path='/todoList' component={TodoList} />
							<Route path='/shakshuka' component={Shakshuka} />
							<Route path='/game' component={Game} />
							<Route path='/cat' component={Cat} />
							<Route path='/jukebox' component={Jukebox} />
							{routes.map((x, index) =>
								<Route 
									key={index} 
									path={`/${x.link}`} 
									render={() => 
										<Post 
											title={x.title}
											link={x.link}
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
											graffiti={x.graffiti}
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
