import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import StartGame from '../containers/start_game';
import JoinLeaveButton from '../containers/join_leave_button';

const Game = ({ game, users }) => {

  function backToMain () {
    browserHistory.push('');
  }

  return (
    <div>
      <button onClick={backToMain}>
        {"Back"}
      </button>
      <div>
        {"Game #" + (game ? game.id : ' ')}<br/>
        {"Users: " + (users ? users.length : '0')}<br/>
        {"Status: " + (game ? game.status : ' ')}<br/>
      </div>
      <StartGame id={game.id}/>
      <JoinLeaveButton />
    </div>
  );

}

export default Game;
