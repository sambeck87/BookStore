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
      <div id="working">{message}</div>
      <button type="button" onClick={clickHandle}>Check status</button>
    </div>
  );
}

export default Categories;
