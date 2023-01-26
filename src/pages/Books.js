import React from 'react';
import BookList from '../components/BookList';
import Form from '../components/Form';
import '../index.css';

const Books = () => (
  <div id="pageBookList">
    <BookList />
    <Form />
  </div>
);

export default Books;
