import React from 'react';

const SignInUpForm = ({ submitData, toggleForm, buttonText, linkText, demoLogIn }) => {

  let input = {
    username: '',
    password: ''
  };

  return (
    <div className="sign-in-up-form">
      <form onSubmit={(e) => {
          e.preventDefault();
          submitData({ username: input.username.value.trim(), password: input.password.value.trim() });
          input.username.value = '';
          input.password.value = '';
        }}
      >
        <input
          type="text"
          className="form-fields"
          placeholder="username"
          ref={(e) => {
            input.username = e;
          }}
        />
        <input
          type="password"
          className="form-fields"
          placeholder="password"
          ref={(e) => {
            input.password = e;
          }}
        />
        <button type="submit">
          {buttonText}
        </button>
        <button onClick={(e) => {
            e.preventDefault();
            demoLogIn();
          }}>
          Demo Login
        </button>
      </form>
      <div className="unsel switch-form" onClick={toggleForm}>
        {linkText}
      </div>
    </div>
  );
};

export default SignInUpForm;
