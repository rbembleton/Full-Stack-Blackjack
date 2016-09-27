const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_USER':
      return action.user;
    default:
      return state;
  }
};

export default currentUser;
