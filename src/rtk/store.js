import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer" 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    toolkit: toolkitReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));