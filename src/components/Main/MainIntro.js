import React from 'react'
import { Row, Column } from 'react-foundation'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'


const MainIntro = () => (
	<section>
		<Row className='display grid-x welcomeIntro'>
			<Column large={10} offsetOnLarge={1} className='o-hero u-align-left'>
				<ReactMarkdown source={'# Welcome'}/>
				<img src={`/assets/main/welcome.jpg`} alt='Welcome'/>
				<p>Welcome to my Birthright Trip to the Land of Israel.  Here you will see photos, read my story, and learn facts about the places in Israel I saw, along with a few other goodies.  To view my project in chronological order, press the Begin button below, or you if would like to view an individual section, click on the sidebar to find your section of choice.  Thank you and enjoy!</p>
				<Link to={'/todoList'} className='custom-button'>Begin</Link>
				<h1>Prologue</h1>
				<ReactMarkdown source={`
Growing up as a Jewish American in Portland, Oregon, I often heard about the land of the Jewish people: Israel.  Attending Jewish School, studying to become a Bar Mitzvah, going to the Portland Jewish Academy (PJA) in the 7th Grade, I often wondered what life would be like in the land of Israel.  Jerusalem, Tel Aviv, the Dead Sea, all the places mentioned in the Torah.  To me, an important step of understanding Judaism is to experience it in Israel.

I could've taken the opportunity in the 8th Grade at the PJA, but was it worth it to be the only boy in my class that year, at a school where I didn't fit in?  The clear answer was no, and thus, I went back to public Middle School and didn't go to Israel.  Years went by before I had another opportunity.

When I was 26 years old, I learned of Birthright Israel, a program that allowed people who have never been to Israel before, an opportunity to travel there with little or no cost to get and stay there.  After all, it's important for people of the Jewish faith to visit the land of Israel at least once in their life.  I was psyched having learned this, to help me get in touch with my Jewish roots.

But the powers that be prevented me from going.  I was denied the chance not enough room for Adam to go, Birthright told me, even though it would seem they would want someone like me who was at the age limit of 26.  So it seemed like I would never be able to go to Israel.  So years went by, wondering what could have been.  But then, in December of 2017, I received an email I never expected: Birthright Israel was extending the age limit to people up to 32 years old, which once again, gave myself an opportunity to go, right at the age limit.  Suddenly, a second chance at Israel presented itself.

Now had to be the time.  I was more mature this time around, and able to handle myself for such a big trip, both physically, mentally and socially.  So when I applied this time around, I was all in, applying at the very first chance I could get, with no technical issues stopping me.  I chose to sign up for the trip through Amazing Israel, since they had their trip May, which was beneficial to me since unable to go in the Summer due to work scheduling issues.  But as weeks went by, I saw deja vu all over again, thinking I would be denied yet again.  They offered a fall trip, but I figured I wasn't eligible since I would be 33.  After questioning them, I was thankfully told I was wrong I was eligible since I applied as a 32 year old.  And with that, I was accepted into Birthright Israel.  My second chance was granted.  I never thought I'd get it, but as my Mom always tells me, things happen for a reason.
`}/>
			</Column>
		</Row>
	</section>
)

export default MainIntro