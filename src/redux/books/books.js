const ADD_BOOK = 'BookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'BookStore/books/REMOVE_BOOK';

const initalState = [];

export const add = (book) => ({
  type: ADD_BOOK,
  book,
});

export const remove = (book) => ({
  type: REMOVE_BOOK,
  id: book.id,
});

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      action.book,
    ];
    case REMOVE_BOOK: return state.filter((item) => item.id !== action.id);

    default: return state;
  }
};

export default reducer;
