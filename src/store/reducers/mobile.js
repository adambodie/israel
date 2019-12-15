export const getMobileOperatingSystem = (state = '') => {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera
	if (/windows phone/i.test(userAgent)) {
        state = 'Windows Phone'
        return state
	}
	if (/android/i.test(userAgent)) {
        state = 'Android'
        return state
	}
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        state = 'iOS'
        return state
	}	  
	state  = 'unknown'
    return state
}