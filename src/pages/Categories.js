import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import '../styles/categories.css';

function Categories() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.rootReducer.statusReducer);

  return (
    <div id="workingContainer">
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      <div id="working">{message}</div>
    </div>
  );
}

export default Categories;
