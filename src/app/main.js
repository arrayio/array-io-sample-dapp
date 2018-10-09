import '../assets/css/style.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <App dispatch={store.dispatch} />
    </Provider>
    , document.getElementById('root')
)
