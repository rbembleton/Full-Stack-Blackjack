import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions';

let StartGame = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      Start Game
    </button>
  );
};

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log('hi');
    startGame(ownProps.id, dispatch);
  }
});

StartGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(StartGame);

export default StartGame;
