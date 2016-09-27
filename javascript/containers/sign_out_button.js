import React from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../actions';

let SignOutButton = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      Sign Out
    </button>
  );
};

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    logOutUser(dispatch);
  }
});

SignOutButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOutButton);

export default SignOutButton;
