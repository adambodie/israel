import * as types from '../constants/action_types'

export function hoverOn(text) {
	return {
		type: types.HOVER_ON,
		text
	}
}

export function hoverOff(text) {
	return {
		type: types.HOVER_OFF,
		text
	}
}