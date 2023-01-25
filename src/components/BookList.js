import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookItem from './Book';
import '../styles/bookList.css';

function BookList() {
  const books = useSelector((state) => state.rootReducer.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  },
  [dispatch]);

  if (books.length === 0) {
    return (
      <h1>No books found! </h1>
    );
  }

  return (
    books.map((book) => (
      <BookItem
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ))
  );
}

export default BookList;
