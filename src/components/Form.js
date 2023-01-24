import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books';
import '../styles/form.css';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [id, setId] = useState(4);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setId(id + 1);
    e.preventDefault();
    const newBook = {
      id, title, author, category: 'null',
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
