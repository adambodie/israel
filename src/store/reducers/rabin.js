import * as RABIN from '../constants/action_types'

const initialRabinState = {
	className: '',
	testId: 'hoverOff'
}

export const hoverRabin = (state = initialRabinState, action) => {
	switch (action.type) {
		case RABIN.HOVER_ON:
			return Object.assign({}, state, {
				className: 'hoverOver',
				testId: 'hoverOver'
			})
		case RABIN.HOVER_OFF:
			return Object.assign({}, state, {
				className: '',
				testId: 'hoverOff'
				})
		default:
		  state = ''
		  return state
	  }
}
