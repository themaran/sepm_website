// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import classesReducer from './reducers/classesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  classes: classesReducer,
});

export default rootReducer;
