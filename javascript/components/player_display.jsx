import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import GameActions from '../containers/game_actions';
import VisibleCard from '../containers/visible_card';
import VisibleDeck from '../containers/visible_deck';

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
    this.state = {
      winnerBanner: this.props.isWinner ? 'show-banner' : 'hide-banner',
      numCards: this.props.cards.length,
      myOffset: [0,0]
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateMyOffset.bind(this));
    this.initialUpdateOffestTimeout = setTimeout(this.updateMyOffset.bind(this), 5000);
    this.updateMyOffset();
  }

  updateMyOffset () {
    const myRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState({
      myOffset: [
        (this.props.isDealer ? myRect.left + 200 : myRect.left),
        (this.props.isDealer ? myRect.top + 10 : myRect.top)
      ]
    });
  }

  componentWillUnmount () {
    clearTimeout(this.initialUpdateOffestTimeout);
    clearTimeout(this.bannerTimeout);
    removeEventListener('resize', this.updateMyOffset.bind(this));
  }

  displayHand () {
    const numCards = this.props.cards.length;
    // const totalSize = (400 - (numCards * 90 + (numCards - 1) * 10));
    const start = this.props.isDealer ? 0 : (
      numCards > 4 ? 0 : (400 - (numCards * 90 + (numCards - 1) * 10)) / 2
    );
    const idxMod = numCards > 4 ? 310 / (numCards - 1) : 100;

    return this.props.cards.map((card, idx) => {
      let top = 0;
      let left = idx * idxMod + start;
      return <VisibleCard
        key={card.id}
        card={card}
        newCard={idx + 1 > this.state.numCards}
        playerOffset={this.state.myOffset}
        position={[left, top]}/>;
    })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.cards.length !== this.props.cards.length) {
      const newLength = newProps.cards.length;
      this.setState({ numCards: this.props.cards.length });
      let that = this;
      this.flipTimeout = setTimeout(() => {
        that.setState({ numCards: newLength });
      }, 50);
    }

    if (newProps.isWinner === true && !(this.props.isWinner && this.props.game.status === 'finished')) {
      this.setState({ winnerBanner: 'min-banner' });
      let that = this;
      this.bannerTimeout = setTimeout(() => {
        that.setState({ winnerBanner: 'show-banner' });
      }, 100);
    }
  }

  render () {
    return (
      <div className={`player-display ${this.props.myClass} ${this.props.isCurrentPlayer ? 'current-player' : ''} clearfix`}>
        <h2>
          {this.props.isCurrentUser ? <span className="current-user-light">{"🔵 "}</span> : null}
          {this.props.username}
        </h2>
        {this.props.isDealer ?
          <div className="dealer-cont">
            <VisibleDeck />
            <div className="player-hand clearfix">
              {this.displayHand()}
            </div>
          </div> :
          <div className="player-hand clearfix">
            {this.displayHand()}
          </div>
        }
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
