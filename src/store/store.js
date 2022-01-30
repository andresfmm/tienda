import { createStore, combineReducers,  applyMiddleware, compose } from "redux";

import thunk from 'redux-thunk';
import { authReducer } from "../reducers/authReducer";
import { storageReducer } from "../reducers/storageReducer";
import { uiReducers } from "../reducers/uiReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducers,
    storage: storageReducer
});


export const store = createStore(
     reducers,
     composeEnhancers(
        applyMiddleware(thunk)
     )
     
);