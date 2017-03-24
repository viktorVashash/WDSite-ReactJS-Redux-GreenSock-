import { combineReducers } from 'redux';
import homePage from './homePage';
import menuStatus from './menu';

const RootReducer = combineReducers({
  homePage,
  menuStatus
});

export default RootReducer;
