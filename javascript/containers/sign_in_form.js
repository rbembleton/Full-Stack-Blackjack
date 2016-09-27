import React from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../actions';

let SignInForm = ({ submitData }) => {

  let input = {
    username: '',
    password: ''
  };

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        submitData({ username: input.username.value.trim(), password: input.password.value.trim() });
        input.username.value = '';
        input.password.value = '';
      }}
    >
      Sign in:
      <input
        type="text"
        placeholder="username"
        ref={(e) => {
          input.username = e;
        }}
      />
      <input
        type="password"
        placeholder="password"
        ref={(e) => {
          input.password = e;
        }}
      />
      <button type="submit">
        sign in
      </button>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitData: (data) => {
    logInUser(data, dispatch);
  }
});

SignInForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);

export default SignInForm;
