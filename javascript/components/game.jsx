import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import StartResetButton from '../containers/start_reset_button';
import JoinLeaveButton from '../containers/join_leave_button';
import VisiblePlayingField from '../containers/visible_playing_field';
import Pusher from 'pusher-js';

class Game extends Component {
  static propTypes = {
    game: PropTypes.object,
    users: PropTypes.array,
    isJoined: PropTypes.bool,
    winner: PropTypes.object,
    updateGame: PropTypes.func
  }

  componentDidMount () {
    this.pusher = new Pusher('9c9d63b4a8bf9c44a1b3', {
      encrypted: true
    });
  }

  componentWillReceiveProps (newProps) {
    if (newProps.game.id !== this.props.game.id) {
      let channel = this.pusher.subscribe(`game_channel_${newProps.game.id}`);
      channel.bind('update_game', () => {
        this.props.updateGame(newProps.game.id);
      });
    }
  }

  componentWillUnmount () {
    this.pusher.unsubscribe();
  }

  backToMain (e) {
    e.preventDefault();
    browserHistory.push('');
  }

  usersList () {
    if (this.props.users && this.props.users.length > 0) {
      const numUsers = this.props.users.length;
      return this.props.users.map((user, idx) => {
        return (idx === 0 ? '' : (idx + 1 === numUsers ? ' and ' : ', ')) + user.username
      })
    } else {
      return '--'
    }
  }

  render () {
    return (
      <div className="game">
        <button className="back-button" onClick={this.backToMain}>
          {"Back"}
        </button>
        <div className="game-stats">
          {"Game #" + (this.props.game && this.props.game.id ? this.props.game.id : '--')}<br/>
          {"Users (" + (this.props.users ? this.props.users.length : 0) + "): "}{this.usersList()}<br/>
        {"Status: " + (this.props.game &&  this.props.game.status ? this.props.game.status : '--')}<br/>
          {"Winner: " + (this.props.game && this.props.game.status === 'finished' &&
            this.props.winner ? this.props.winner.username : "--")}<br/>
        </div>
        <div className="start-leave-button-cont">
          <StartResetButton id={this.props.game.id}/>
          <JoinLeaveButton />
        </div>
        { this.props.isJoined && this.props.game.status !== 'new' ? <VisiblePlayingField /> : null }
      </div>
    );
  }

}

export default Game;
