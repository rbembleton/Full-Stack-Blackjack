const currentGame = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_GAME':
      return {
        ...state,
        id: action.game.id,
        users: action.game.users,
        deck: action.game.deck.size,
        dealer: action.game.dealer,
        status: action.game.status
      };
    default:
      return state;
  }
}

export default currentGame
