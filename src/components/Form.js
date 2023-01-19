import React from 'react';
import '../styles/form.css';

function Form() {
  return (
    <form id="form">
      <input id="titleInput" type="text" placeholder="Title" />
      <input id="authoeInput" type="text" placeholder="Author" />
      <button id="submitButton" type="button">Submit</button>
    </form>
  );
}

export default Form;
