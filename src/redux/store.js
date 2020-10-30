import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bookReducer from './book/bookReducer';

const store = createStore(bookReducer, applyMiddleware(logger));

export default store;