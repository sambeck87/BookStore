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

  const clickHandle = () => {
    dispatch(remove(id));
  };

  return (
    <div className="itemContainer">
      <div className="dataContainer">
        <div className="BookContainer">
          <h4 className="category">{category}</h4>
          <h2 className="title">{title}</h2>
          <h6 className="author">{author}</h6>
          <div className="buttonContainer">
            <button type="button" className="bookButton" onClick={clickHandle}>
              Comments
            </button>
            <button type="button" className="bookButton deleteButon" onClick={clickHandle}>
              Remove
            </button>
            <button type="button" className="bookButton" onClick={clickHandle}>
              Edit
            </button>
          </div>

        </div>
        <div className="progress">
          <div className="circleContainer">
            <div className="circle">&nbsp;</div>
          </div>
          <div className="percentContainer">
            <p className="percent">
              {title.length}
              %
            </p>
            <p className="completed">Completed</p>
          </div>
          <div className="divisor">&nbsp;</div>
          <div>
            <div className="charterContainer">
              <p className="labelChapter">CURRENT CHAPTER</p>
              <p className="chapter">
                Chapter
                {title.length * 2}
              </p>
            </div>
            <button type="button" className="updateButton">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
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
