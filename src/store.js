import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};
/*
    Applying Redux-Thunk middleware, 
    since we are using actions to control the data.
    With Thunk, we can use async functions, in actions and more
*/
const middleWare = [thunk];

// store creation,
//composeWithDevtools is Chrome extension = helps to watch current state condition
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
