import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import '../styles/bookList.css';

function BookList() {
  const books = useSelector((store) => store.demoListBooks);

  if (books.length === 0) {
    return (
      <h1>No books found! </h1>
    );
  }

  return (
    books.map((book) => (
      <Book key={book.id} title={book.title} author={book.author} category={book.category} />
    ))
  );
}

export default BookList;
