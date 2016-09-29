import { combineReducers } from 'redux';
import games from './games';
import currentGame from './current_game';
import currentUser from './current_user';
import toggleForm from './toggle_form';

const gameApp = combineReducers({
  games,
  currentGame,
  currentUser,
  toggleForm
});

export default gameApp;
