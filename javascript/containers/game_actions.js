import React from 'react';
import { connect } from 'react-redux';
import { makeMove } from '../actions';

let GameActions = ({ gameId, clickToHit, clickToStand }) => {
  return (
    <div>
      <button onClick={() => clickToHit(gameId)}>
        Hit
      </button>
      <button onClick={() => clickToStand(gameId)}>
        Stand
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  gameId: state.currentGame.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  clickToHit: (gameId) => {
    makeMove({gameId: gameId, moveType: 'hit'}, dispatch);
  },
  clickToStand: (gameId) => {
    makeMove({gameId: gameId, moveType: 'stand'}, dispatch);
  }
});

GameActions = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameActions);

export default GameActions;
