import { createStore } from 'redux';
import { combineReducers } from 'redux';
import counterReducer from '../store/reducers/counterReducer';

const dataReducer = (state = { message: 'Hello, Redux!' }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  data: dataReducer,
});

const store = createStore(rootReducer);

export default store;