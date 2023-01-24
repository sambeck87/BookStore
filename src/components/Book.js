import React from 'react';
import { useDispatch } from 'react-redux';
import '../styles/bookItem.css';
import PropTypes from 'prop-types';
import { remove } from '../redux/books/books';

const BookItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;

  return (
    <div className="containerItem">
      <div className="dataContainer">
        <span className="category">{category}</span>
        <span className="title">{title}</span>
        <span className="author">{author}</span>
      </div>
      <button type="button" className="deleteButon" onClick={() => dispatch(remove(id))}>
        Remove
      </button>
    </div>
  );
};

export default BookItem;

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
