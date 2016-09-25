let nextGameId = 0;
export const addGame = (text) => ({
  type: 'ADD_GAME',
  id: nextGameId++,
  text
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleGame = (id) => ({
  type: 'TOGGLE_GAME',
  id
});
