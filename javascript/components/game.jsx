import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import StartGame from '../containers/start_game';
import JoinLeaveButton from '../containers/join_leave_button';
import VisiblePlayingField from '../containers/visible_playing_field';


const Game = ({ game, users, isJoined }) => {

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
      {"Users (" + (users ? Object.keys(users).length : '0') + "): "}{(users ? Object.keys(users).map((id) => users[id].username) : '--')}<br/>
        {"Status: " + (game ? game.status : ' ')}<br/>
      </div>
      <StartGame id={game.id}/>
      <JoinLeaveButton />
      { isJoined && game.status !== 'new' ? <VisiblePlayingField /> : null }
    </div>
  );

}

export default Game;
