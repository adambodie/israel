import React from 'react'
import { Row, Column } from 'react-foundation'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		mainTitle: state.mainTitle,
		mainParagraph: state.mainParagraph
	}
}

const MainIntro = ({ mainTitle, mainParagraph }) => (
	<section>
		<Row className='display grid-x welcomeIntro'>
			<Column large={10} offsetOnLarge={1} className='o-hero u-align-left'>
				<ReactMarkdown source={mainTitle}/>
				<img src={`/assets/main/welcome.jpg`} alt='Welcome'/>
				<p>Welcome to my Birthright Trip to the Land of Israel.  Here you will see photos, read my story, and learn facts about the places in Israel I saw, along with a few other goodies.  To view my project in chronological order, press the Begin button below, or you if would like to view an individual section, click on the sidebar to find your section of choice.  Thank you and enjoy!</p>
				<Link to={'/todoList'} className='custom-button'>Begin</Link>
				<h1>Prologue</h1>
				<ReactMarkdown source={mainParagraph}/>
			</Column>
		</Row>
	</section>
)

export default connect(mapStateToProps) (MainIntro)