import React from 'react';
import { connect } from 'react-redux';
import { joinGame, leaveGame } from '../actions';
import { browserHistory } from 'react-router';

let JoinLeaveButton = ({ userId, gameId, isJoined, isStarted, onClickJoin, onClickLeave }) => {
  return (
    isJoined ?
      <button type="submit" disabled={isStarted} onClick={() => onClickLeave({ userId: userId, gameId: gameId })}>
        Leave Game
      </button> :
      <button type="submit" disabled={isStarted} onClick={() => onClickJoin({ userId: userId, gameId: gameId })}>
        Join Game
      </button>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userId: state.currentUser.id,
  gameId: state.currentGame.id,
  isStarted: state.currentGame.status === 'started',
  isJoined: state.currentGame.users ?
    !!(state.currentGame.users.find((user) => user.id === state.currentUser.id)) :
    false
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickJoin: (data) => {
    joinGame(data, dispatch);
  },
  onClickLeave: (data) => {
    leaveGame(data, dispatch);
    browserHistory.push('/');
  }
});

JoinLeaveButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinLeaveButton);

export default JoinLeaveButton;
