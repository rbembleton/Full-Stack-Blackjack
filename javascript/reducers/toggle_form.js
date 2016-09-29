const toggleForm = (state = 'login', action) => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      if (action.form) return action.form;
      return state === 'login' ? 'signup' : 'login';
    default:
      return state;
  }
};

export default toggleForm;
