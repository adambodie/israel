import axios from 'axios';
import * as types from '../constants/action_types'
const ROOT_URL = 'https://api.giphy.com/v1/gifs/search?api_key=9QkF2zr9JlrtO77ouF5NhuLQ348t4vAJ&q=cat&limit=500'

export function shuffleArray(text) {
	return {
		type: types.SHUFFLE_ARRAY,
		text
	}
}

export function fetchCats() {
    const request = axios.get(ROOT_URL)
    return {
        type: types.FETCH_CATS,
        payload: request
    }
}