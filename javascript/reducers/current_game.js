const currentGame = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_GAME':
      let users_obj = {};
      action.game.users.forEach((user) => users_obj[user.id] = user);
      return {
        ...state,
        id: action.game.id,
        users: users_obj,
        deck: action.game.deck.size,
        dealer: action.game.dealer,
        status: action.game.status,
        winner: action.game.winner,
        currentPlayer: action.game.current_player
      };
    default:
      return state;
  }
}

export default currentGame
