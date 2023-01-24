import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import '../styles/categories.css';

function Categories() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.rootReducer.statusReducer);

  const clickHandle = () => {
    dispatch(checkStatus());
  };

  return (
    <div id="workingContainer">
      <button type="button" onClick={clickHandle}>Check status</button>
      <div id="working">{message}</div>
    </div>
  );
}

export default Categories;
