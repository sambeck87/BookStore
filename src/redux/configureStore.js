import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  statusReducer,
});

const store = configureStore({ reducer: { rootReducer } }, applyMiddleware(thunk));

export default store;
