import React from 'react';
import { connect } from 'react-redux';
import SignOutButton from './sign_out_button';

let CurrentUser = ({ user }) => {

  return (
    <div className="welcome-user">
      {user.id ?
        <div>
          {`Welcome, ${user.username}`}
          <SignOutButton />
        </div> : 'not signed in'}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  user: state.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

CurrentUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser);

export default CurrentUser;
