const CHECK_STATUS = 'BookStore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({ type: CHECK_STATUS });

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS: return 'Under construction';
    default: return state;
  }
};

export default statusReducer;
