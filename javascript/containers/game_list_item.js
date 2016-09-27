import React from 'react';
import { connect } from 'react-redux';
import { fetchGame } from '../actions';
import { browserHistory } from 'react-router';

let GameListItem = ({ game, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>
        {"Game #" + (game ? game.id : ' ')}<br/>
        {"Users: " + (game ? game.users : '0')}<br/>
        {"Status: " + (game ? game.status : ' ')}<br/>
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  game: state.games[ownProps.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log('fetch-game');
    fetchGame(ownProps.id, dispatch);
    browserHistory.push(`game/${ownProps.id}`);
  }
});

GameListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameListItem);

export default GameListItem;
