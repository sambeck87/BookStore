import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books';
import '../styles/form.css';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: v4(), title, author, category: 'null',
    };
    if (title !== '' && author !== '') {
      dispatch(add(newBook));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input id="titleInput" type="text" value={title} placeholder="Title" onChange={({ target }) => setTitle(target.value)} />
      <input id="authoeInput" type="text" value={author} placeholder="Author" onChange={({ target }) => setAuthor(target.value)} />
      <button id="submitButton" type="submit">Submit</button>
    </form>
  );
}

export default Form;
