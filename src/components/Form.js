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
    <div id="form_container" className="flexCol">
      <h2 id="AddNewBook" className="montserratFont">ADD NEW BOOK</h2>
      <form className="flexRow" id="form" onSubmit={handleSubmit}>
        <input id="titleInput" className="montserratFont" type="text" value={title} placeholder="Book title" onChange={({ target }) => setTitle(target.value)} />
        <input id="authoeInput" className="montserratFont" type="text" value={author} placeholder="Author" onChange={({ target }) => setAuthor(target.value)} />
        <select id="category" className="montserratFont" defaultValue="" onChange={({ target }) => setCategory(target.value)}>
          <option value="" selected disabled>Select a category</option>
          <option value="Adventure">Adventure</option>
          <option value="Classics">Classics</option>
          <option value="Fairy tales, fables, and folk tales.">Fairy tales, fables, and folk tales.</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical fiction">Historical fiction</option>
          <option value="Horror">Horror</option>
          <option value="Humour and satire.">Humour and satire.</option>
        </select>
        <button id="submitButton" className="robotoFont cursorPoiter" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
