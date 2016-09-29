import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import GameListItem from '../containers/game_list_item';
import Pusher from 'pusher-js';

class GameList extends Component {
  static propTypes = {
    games: PropTypes.object,
    getAllGames: PropTypes.func
  }

  componentDidMount () {
    this.props.getAllGames();

    this.pusher = new Pusher('9c9d63b4a8bf9c44a1b3', {
      encrypted: true
    });

    let channel = this.pusher.subscribe('all_games_channel');
    channel.bind('update_games', this.props.getAllGames);
  }

  componentWillUnmount () {
    this.pusher.unsubscribe();
  }

  render () {
    return (
      <div className="game-list">
        {Object.keys(this.props.games).map((gameId, idx) => {
          return <GameListItem key={idx} id={gameId} />
        })}
      </div>
    );
  }

}

export default GameList;
