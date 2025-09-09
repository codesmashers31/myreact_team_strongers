import { configureStore } from '@reduxjs/toolkit';

// Counter reducer
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
