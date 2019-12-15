import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Landing from './components/Landing'
import Main from './components/Main/Main'
import Post from './components/Posts/Post'
import TodoList from './components/Todo/TodoList'
import Shakshuka from './components/Shakshuka/Shakshuka'
import Cat from './components/Cat/Cat'
import Game from './components/Game/Game'
import Jukebox from './components/Jukebox/Jukebox'
import NoMatch from './components/NoMatch'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		routes: state.routes,
	}
}

const App = ({routes}) => {
    return (
		<Router>
			<ScrollToTop >
				<div className='App'>
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route path='/index' component={Main} />
						<Route path='/todoList' render={() => <TodoList/>} />
						<Route path='/shakshuka' render={() =><Shakshuka/>} />
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
											data={`/assets/data/${x.link}.json`}
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
		</Router>
    )
}

export default connect(mapStateToProps) (App)
