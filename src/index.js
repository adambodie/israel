import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './styles/App.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import  { Helmet } from 'react-helmet'

ReactDOM.render(
    <Provider store={store}>
        <Helmet>
            <meta charset='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
            <meta property='og:image' content='/assets/main/og-image.png' />
            <link rel='shortcut icon' href='/favicon.ico' />
            <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
            <title>Adam's Birthright Trip to the Land of Israel</title>
        </Helmet>
        <App />
    </Provider>
    , document.getElementById('root'))
serviceWorker.unregister()
