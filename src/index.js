import React from 'react';
import App from './App'
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from './reducers/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom';



// create store 
// since we can't pass in more than one reducer into the store... make one big one
// create store takes in reducer and middleware/
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
    // provider takes in a prop of store
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>, 
    document.getElementById('root')
)