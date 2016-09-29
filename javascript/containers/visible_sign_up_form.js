import React from 'react';
import { connect } from 'react-redux';
import SignInUpForm from '../components/sign_in_up_form';
import { createUser, toggleForm } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  buttonText: 'Sign up',
  linkText: 'I already have an account'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitData: (data) => {
    createUser(data, dispatch);
  },
  demoLogIn: (data) => {
    logInUser({ username: 'demo', password: 'password' }, dispatch);
  },
  toggleForm: () => {
    dispatch(toggleForm());
  }
});

const VisibleSignUpForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInUpForm);

export default VisibleSignUpForm;
