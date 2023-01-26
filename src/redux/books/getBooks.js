const GET_BOOKS = 'BookStore/book/GET_BOOKS';
const GET_BOOKS_SUCCESS = 'BookStore/book/GET_BOOKS_SUCCESS';

const getBooks = (payload) => ({
  type: GET_BOOKS,
  ...payload,
});

const getBooksSuccess = (payload) => ({
  type: GET_BOOKS_SUCCESS,
  ...payload,
});

const fetchBooks = () => (dispatch) => {
  dispatch(getBooks());
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pZQm0JLxGLdLCcuptAch/books')
    .then((response) => response.json())
    .then((result) => dispatch(getBooksSuccess(result)));
};

export default fetchBooks;
