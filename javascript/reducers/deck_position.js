const deckPosition = (state = [0,0], action) => {
  switch (action.type) {
    case 'UPDATE_DECK_POSITION':
      return action.newPosition;
    default:
      return state;
  }
};

export default deckPosition;
