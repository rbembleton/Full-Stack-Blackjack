import React from 'react';
import { connect } from 'react-redux';
import SignInUpForm from '../components/sign_in_up_form';
import { logInUser, toggleForm } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  buttonText: 'Log in',
  linkText: "I don't have an account yet"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitData: (data) => {
    logInUser(data, dispatch);
  },
  demoLogIn: () => {
    logInUser({ username: 'demo', password: 'password' }, dispatch);
  },
  toggleForm: () => {
    dispatch(toggleForm());
  }
});

const VisibleLogInForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInUpForm);

export default VisibleLogInForm;
