import React, { useEffect, useState } from 'react';
import Book from './Book';
import '../styles/bookList.css';
import demoListBooks from './DemoBooks';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(demoListBooks);
  }, []);

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
