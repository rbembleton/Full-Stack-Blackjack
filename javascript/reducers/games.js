const games = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_ALL_GAMES':
      let ret_obj = {};
      action.games.forEach((game) => {
        ret_obj[game.id] = {
          id: game.id,
          status: game.status,
          users: game.users
        };
      });
      return ret_obj;
    case 'RECEIVE_GAME':
      let updatedGame = {};
      updatedGame[action.game.id] = {
        id: action.game.id,
        status: action.game.status,
        users: action.game.users.length
      };
      return {...state, ...updatedGame};
    default:
      return state;
  }
};

export default games;
