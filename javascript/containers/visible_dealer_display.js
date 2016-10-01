import { connect } from 'react-redux';
import PlayerDisplay from '../components/player_display';

const mapStateToProps = (state, ownProps) => ({
  game: state.currentGame,
  player: state.currentGame.dealer,
  username: 'dealer',
  hand: state.currentGame.dealer.hand,
  cards: state.currentGame.dealer.hand.cards,
  myClass: ownProps.myClass,
  isDealer: true,
  isCurrentUser: false,
  isWinner: (state.currentGame.winner && state.currentGame.winner.type === 'Dealer'),
  isInPlay: state.currentGame.status !== 'new' && state.currentGame.status !== 'cleared'
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const VisibleDealerDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerDisplay);

export default VisibleDealerDisplay;
