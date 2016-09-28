import React from 'react';
import { connect } from 'react-redux';
import { startGame, resetGame } from '../actions';

let StartResetButton = ({ onClickStart, onClickClear, isStarted, isFinished }) => {
  return (
    isFinished ?
      <button type="submit" onClick={onClickClear}>
        Reset Game
      </button> :
      <button type="submit" disabled={isStarted} onClick={onClickStart}>
        Start Game
      </button>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isStarted: state.currentGame.status === 'started',
  isFinished: state.currentGame.status === 'finished',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickStart: () => {
    startGame(ownProps.id, dispatch);
  },
  onClickClear: () => {
    resetGame(ownProps.id, dispatch);
  }

});

StartResetButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(StartResetButton);

export default StartResetButton;
