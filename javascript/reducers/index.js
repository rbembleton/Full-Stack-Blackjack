import { combineReducers } from 'redux';
import games from './games';
import currentGame from './current_game';
import currentUser from './current_user';
import toggleForm from './toggle_form';
import deckPosition from './deck_position';

const gameApp = combineReducers({
  games,
  currentGame,
  currentUser,
  toggleForm,
  deckPosition
});

export default gameApp;
