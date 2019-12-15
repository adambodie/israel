import * as types from '../constants/action_types'

export function pressButton(text) {
	return {
		type: types.PRESS_BUTTON,
		text
	}
}
