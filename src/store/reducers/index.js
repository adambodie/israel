import { combineReducers } from 'redux'
import { reducer as modal } from 'redux-modal'

import { PAGES } from '../constants/pages'
import { ROUTES } from '../constants/routes'
import { QUIZ_QUESTIONS } from '../constants/quiz'
import * as ARRAYS from '../constants/arrays'

import { getMobileOperatingSystem } from './mobile'
import todos  from './todo'
import { hoverRabin } from './rabin'
import { thanksButton } from './thanks'

export const pages = (state = PAGES) => state
export const routes = (state = ROUTES) => state
export const quizQuestions = (state = QUIZ_QUESTIONS) => state

export const songs = (state = ARRAYS.SONGS) => state
export const eggs = (state = ARRAYS.EGGS) => state
export const members = (state = ARRAYS.MEMBERS) => state

export const rootReducer = combineReducers({ 
	modal,
	pages, 
	routes, 
	songs,
	eggs,
	members, 
	quizQuestions, 
	getMobileOperatingSystem,
	hoverRabin,
	thanksButton, 
	todos
})
