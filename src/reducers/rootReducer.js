import { combineReducers } from "redux";

import { booksReducer } from "./booksReducer";



export const rootReducer = combineReducers({
// pass in keys of reducers 
// these are the keys we seen in the redux dev tools

    books: booksReducer
})
//pass in rootReducer into createStore function
