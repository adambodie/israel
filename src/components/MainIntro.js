import React from 'react';
import { Row, Column } from 'react-foundation';

const MainIntro = () => {
	return (
		<section style={{minHeight: '600px'}}>
			<Row className="display grid-x">
				<Column large={10} offsetOnLarge={1} className="o-hero u-align-left">
					<h1 className="c-heading-4 c-heading-4--upper headline">Welcome</h1>
					<img src='http://placehold.it/600x450' alt='placehold'/>
					<p>Growing up as a Jewish American in Portland, Oregon, Adam Bodie often heard about the land of the Jewish people: Israel.  Attending Jewish School, studying to become a Bar Mitzvah, going to a Jewish school in the 7th Grade, Adam often wondered what life would be like in the land of Israel.  Jerusalem, Tel Aviv, the Dead Sea</p>
					<p>Adam could've taken the opportunity in the 8th Grade at the PJA, but was it worth it to be the only boy in his class that year, at a school where Adam didn't fit in?  The clear answer was no, and thus, Adam went back to public Middle School and didn't go to Israel.  Years went by before Adam had another opportunity to go to Israel.</p>
					<p>When Adam was 26 years old, he learned of Birthright Israel, a program that allowed people who have never been to Israel before, an opportunity to travel there with little or no cost.  After all, it's important for people of the Jewish faith to visit the land of Israel at least once in their life.</p>
					<p>But the powers that be prevented Adam from going.  He was denied the chance; not enough room for Adam to go.  So it seemed like Adam would never be able to go to Israel.  Adam wasn't made of money; it wasn't as easy as writing a check.  So years went by, wondering what could have been.  But then, an e-mail popped up in Adam's e-mail.  Birthright Israel was extendng the age limit to people up to 32 years old.  The same age Adam was when he read that e-mail.  Suddenly, a second chance at Israel presented itself.</p>
					<p>Now had to be the time.  Adam was far more mature this time around, and able to handle himself for such a big trip.  So when Adam applied this time around, he was all in.  Things happen for a reason, and soon enough, Adam was ready to go.</p>
				</Column>
			</Row>
		</section>
	)
}

export default MainIntro;
