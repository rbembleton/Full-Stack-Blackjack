import { createStore } from 'redux';

function updateGame(state = {}, action) {
  switch (action.type) {
    case 'NEW_GAME':
      state.game = game;
  }


}
