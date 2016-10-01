import React, { Component, PropTypes } from 'react';
import GameActions from '../containers/game_actions';
import Card from './card';
import Deck from './deck';

class PlayerDisplay extends Component {
  static propTypes = {
    game: PropTypes.object,
    player: PropTypes.object,
    username: PropTypes.string,
    cards: PropTypes.array,
    hand: PropTypes.object,
    myClass: PropTypes.string,
    isCurrentUser: PropTypes.bool,
    isCurrentPlayer: PropTypes.bool,
    isWinner: PropTypes.bool,
    isDealer: PropTypes.bool
  }

  constructor (props) {
    super(props);
    this.state = { winnerBanner: this.props.isWinner ? 'show-banner' : 'hide-banner' };
  }

  componentWillReceiveProps (newProps) {
    if (newProps.isWinner === true && !(this.props.isWinner && this.props.game.status === 'finished')) {
      this.setState({ winnerBanner: 'min-banner' });
      let that = this;
      this.bannerTimeout = setTimeout(() => {
        that.setState({ winnerBanner: 'show-banner' });
      }, 100);
    }
  }

  componentWillUnmount () {
    clearTimeout(this.bannerTimeout);
  }

  render () {
    return (
      <div className={`player-display ${this.props.myClass} ${this.props.isCurrentPlayer ? 'current-player' : ''} clearfix`}>
        <h2>
          {this.props.isCurrentUser ? <span className="current-user-light">{"🔵 "}</span> : null}
          {this.props.username}
        </h2>
        <div className="player-hand clearfix">
          {this.props.isDealer ? <Deck /> : null}
          {this.props.cards.map((card, idx) => <Card key={idx} card={card} />)}
        </div>
        {this.props.isCurrentUser && this.props.isInPlay  ?
          <div className='player-stats'>
            {this.props.hand.is_busted ? <strong>BUSTED! </strong> : null}
            {`Best Value: ${this.props.hand.best_value}, Lowest Value: ${this.props.hand.lowest_value}`}
            {this.props.isCurrentPlayer ? <GameActions /> : null}
          </div> : null}
        {this.props.isWinner && this.props.game.status === 'finished' ?
          <div className={"winner-status unsel " + this.state.winnerBanner}>
            WINNER
          </div> : null}
      </div>
    );
  }

}

export default PlayerDisplay;
