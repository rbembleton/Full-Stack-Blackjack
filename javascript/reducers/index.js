import { combineReducers } from 'redux';
import games from './games';
// import visibilityFilter from './visibilityFilter';

const gameApp = combineReducers({
  games
});

export default gameApp;
