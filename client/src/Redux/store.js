import { createStore, combineReducers } from 'redux';
import { postsReducer, loadingReducer } from './reducers';

const reducers = combineReducers({
  postsReducer,
  loadingReducer
});

const store = createStore(reducers);

export default store;
