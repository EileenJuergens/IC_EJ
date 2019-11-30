import { createStore, combineReducers } from 'redux';
import { postsReducer } from './reducers';

const reducers = combineReducers({
  postsReducer
});

const store = createStore(reducers);

export default store;
