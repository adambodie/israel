import React from 'react'
import ReactMarkdown from 'react-markdown'
import PrevNext from '../PrevNext'

const ShakshukaText = () => (
	<React.Fragment>
		<p><strong>Click on each egg above to view a picture</strong></p>
		<ReactMarkdown 
			source={
			`Between Yad Vashem and the Herzl Cemetery was a quick lunch break nearby. Within a nice little mall was a few places to eat.  The first one I saw was McDonalds.  I've been there, done that from my trips to Europe.  I still remember being charged Euro cents for ketchup packets in Austria.  Are you kidding me?  So I passed up the chance at McDonalds.  What would I have for lunch on this date?   

I ended up with a group that opted for a more sit down place than anticipated.  I might have gone for a sandwich, and that would have been fine with me, until someone pointed out they had Shakshuka.  I had no clue what Shakshuka was.  But I certainly like the idea of trying new foods, as long as it doesn't contain foods I don't like.  So what exactly is Shakshuka?  Shakshuka is a dish of eggs poached in a tomato sauce with chili peppers and onions, along with various spices, commonly including cayenne pepper, cumin, paprika and nutmeg. That was enough to convince me to pique my interest.

I also was interested in trying an Iced Coffee.  Our staff told us we had to try the Iced Coffee at some point, that it was absolutely delicious, and nothing like the Iced Coffee back home.  I passed up the opportunity to try some on the first day in the Old City, and I certainly wanted to have some better coffee than the instant coffee that was served at our hotel.  So now was to time to have some Iced Coffee.  So what makes Iced Coffee different?  Instead of being cold, it's more slushie at the top, kind of like a blended coffee but not quite completely blended.  The Iced Coffee back home can be ordered as Cold Coffee.

That was cool and it came out quickly, but the Shakshuka did not.  And with limited time, we couldn't wait around for it.  After a couple times of checking to see when it would be done, our group finally got our Shakshuka and other dishes, and made our dash towards the bus.  I flagged down our staff and warned them beforehand of the quandary, so there would be no chance we'd be left behind.  So instead of enjoying Shakshuka sitting down, I and a few others ended up having to scarf it down on the bus ride to Mount Herzl and before our tour started.  The meal itself was tasty, but definitely preferred sitting down and not To-Go.  The only thing that could have been worse was for it to explode in my face, but that's not part of my story...
`
			} className='article' />
		<PrevNext prev={'/yad-vashem'} next={'/herzl'} />
	</React.Fragment>
)

export default ShakshukaText
