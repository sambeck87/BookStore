import demoListBooks from '../../components/DemoBooks';

const ADD_BOOK = 'BookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'BookStore/books/REMOVE_BOOK';

const initalState = demoListBooks;

export const add = (book) => ({
  type: ADD_BOOK,
  book,
});

export const remove = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      action.book,
    ];
    case REMOVE_BOOK: return [...state].filter((item) => item.id !== action.id);

    default: return state;
  }
};

export default bookReducer;
