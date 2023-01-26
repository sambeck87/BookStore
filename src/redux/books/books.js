import axios from 'axios';

const ADD_BOOK = 'BookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'BookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'BookStore/book/GET_BOOKS';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dddvqvVfM1LhvUTTpKpc/books/';

export const getBooks = () => async (dispatch) => {
  const response = await axios.get(URL)
    .then((allBooks) => Object.entries(allBooks.data).map(([id, book]) => ({ id, ...book[0] })));
  dispatch({
    type: GET_BOOKS,
    books: response,
  });
};

export const add = (book) => async (dispatch) => {
  const {
    id, title, author, category,
  } = book;
  try {
    await axios.post(URL, {
      item_id: id, title, author, category,
    });
    dispatch({
      type: ADD_BOOK,
      book,
    });
  } catch (error) {
    return error;
  } return true;
};

export const remove = (id) => async (dispatch) => {
  try {
    await axios.delete(URL + id);
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  } catch (error) {
    return error;
  } return true;
};

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      action.book,
    ];
    case REMOVE_BOOK: return [...state].filter((item) => item.id !== action.id);

    case GET_BOOKS: return action.books;

    default: return state;
  }
};

export default bookReducer;
