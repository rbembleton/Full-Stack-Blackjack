import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import StartResetButton from '../containers/start_reset_button';
import JoinLeaveButton from '../containers/join_leave_button';
import VisiblePlayingField from '../containers/visible_playing_field';


const Game = ({ game, users, isJoined, winner }) => {

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
        {"Winner: " + (winner ? winner.username : ' ')}<br/>
      </div>
      <StartResetButton id={game.id}/>
      <JoinLeaveButton />
      { isJoined && game.status !== 'new' ? <VisiblePlayingField /> : null }
    </div>
  );

}

export default Game;
