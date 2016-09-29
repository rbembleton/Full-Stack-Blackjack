import React from 'react';
import { connect } from 'react-redux';
import { createGame } from '../actions';

let AddGame = ({ dispatch }) => {
  return (
    <button
      className="add-game-button" 
      type="submit"
      onClick={() => dispatch(() => createGame(dispatch))}>
      Add Game
    </button>
  );
}
AddGame = connect()(AddGame)

export default AddGame
