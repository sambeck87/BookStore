import React from 'react';
import '../styles/bookItem.css';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { title, author, category } = props;

  return (
    <div className="containerItem">
      <div className="dataContainer">
        <span className="category">{category}</span>
        <span className="title">{title}</span>
        <span className="author">{author}</span>
      </div>
      <button type="button" className="deleteButon">Remove</button>
    </div>
  );
};

export default BookItem;

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
