import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import GameListItem from '../containers/game_list_item';

class GameList extends Component {
  static propTypes = {
    games: PropTypes.object,
    getAllGames: PropTypes.func
  }

  componentDidMount () {
    this.props.getAllGames();
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
