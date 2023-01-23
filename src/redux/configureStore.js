import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({
  book: reducer,
  status: statusReducer,
});

const store = configureStore(rootReducer);

export default store;
