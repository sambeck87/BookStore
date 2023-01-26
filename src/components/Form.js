import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books';
import '../styles/form.css';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Category');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: v4(), title, author, category,
    };
    if (title !== '' && author !== '' && category !== 'Category') {
      dispatch(add(newBook));
    }
    setTitle('');
    setAuthor('');
    setCategory('Category');
  };

  return (
    <div id="form_container">
      <h2 id="AddNewBook">ADD NEW BOOK</h2>
      <form id="form" onSubmit={handleSubmit}>
        <input id="titleInput" type="text" value={title} placeholder="Book title" onChange={({ target }) => setTitle(target.value)} />
        <input id="authoeInput" type="text" value={author} placeholder="Author" onChange={({ target }) => setAuthor(target.value)} />
        <select id="category" defaultValue="" onChange={({ target }) => setCategory(target.value)}>
          <option value="" selected disabled>Select a category</option>
          <option value="Adventure">Adventure</option>
          <option value="Classics">Classics</option>
          <option value="Fairy tales, fables, and folk tales.">Fairy tales, fables, and folk tales.</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical fiction">Historical fiction</option>
          <option value="Horror">Horror</option>
          <option value="Humour and satire.">Humour and satire.</option>
        </select>
        <button id="submitButton" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
