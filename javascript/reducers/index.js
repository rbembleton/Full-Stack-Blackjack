import { combineReducers } from 'redux';
import games from './games';
import currentGame from './current_game';
import currentUser from './current_user';

const gameApp = combineReducers({
  games,
  currentGame,
  currentUser
});

export default gameApp;
