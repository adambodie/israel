const initialThanksState = {
	top: 0, 
	count: 0, 
	text: 'Click Me!',
}

export const thanksButton = (state = initialThanksState, action) => {
	switch (action.type) {
		case 'PRESS_BUTTON':
			state.count++
			let newText = ''
			let newTop = ''
			if (state.count % 3 === 1) {
				newText = 'Look down!'
				newTop = 100
			} else if (state.count % 3 === 2) {
				newText = 'Look up!'
				newTop = 210
			} else {
				newText = 'Click Me!'
				newTop = 0
			}
			return Object.assign({}, state, {
				top: newTop, 
				count: state.count++, 
				text: newText
			})
		default:
			return state
	}
}