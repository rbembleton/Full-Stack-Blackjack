const game = (state, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    default:
      return state;
  }
};

const games = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return ({ ...state, game: game(undefined, action) });
    default:
      return state;
  }
}

export default games
