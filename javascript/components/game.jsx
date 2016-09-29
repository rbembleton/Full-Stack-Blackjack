import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import StartResetButton from '../containers/start_reset_button';
import JoinLeaveButton from '../containers/join_leave_button';
import VisiblePlayingField from '../containers/visible_playing_field';
import Pusher from 'pusher-js';


class Game extends Component {
  static propTypes = {
    game: PropTypes.object,
    users: PropTypes.object,
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

  render () {
    return (
      <div>
        <button onClick={this.backToMain}>
          {"Back"}
        </button>
        <div>
          {"Game #" + (this.props.game ? this.props.game.id : ' ')}<br/>
          {"Users (" + (this.props.users ? Object.keys(this.props.users).length : '0') + "): "}{(this.props.users ? Object.keys(this.props.users).map((id) => this.props.users[id].username) : '--')}<br/>
          {"Status: " + (this.props.game ? this.props.game.status : ' ')}<br/>
          {"Winner: " + (this.props.winner ? this.props.winner.username : ' ')}<br/>
        </div>
        <StartResetButton id={this.props.game.id}/>
        <JoinLeaveButton />
        { this.props.isJoined && this.props.game.status !== 'new' ? <VisiblePlayingField /> : null }
      </div>
    );
  }

}

export default Game;
