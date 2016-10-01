import { connect } from 'react-redux';
import PlayerDisplay from '../components/player_display';

const mapStateToProps = (state, ownProps) => ({
  game: state.currentGame,
  player: state.currentGame.users.find(u => u.id === ownProps.userId),
  username: state.currentGame.users.find(u => u.id === ownProps.userId).username,
  hand: state.currentGame.users.find(u => u.id === ownProps.userId).hand,
  cards: state.currentGame.users.find(u => u.id === ownProps.userId).hand ?
    state.currentGame.users.find(u => u.id === ownProps.userId).hand.cards :
    [],
  myClass: ownProps.myClass,
  isCurrentUser: (ownProps.userId === state.currentUser.id),
  isCurrentPlayer: (state.currentGame.currentPlayer.type === 'User' && ownProps.userId === state.currentGame.currentPlayer.id),
  isWinner: (state.currentGame.winner && state.currentGame.winner.type === 'User' && ownProps.userId === state.currentGame.winner.id),
  isInPlay: state.currentGame.status !== 'new' && state.currentGame.status !== 'cleared'
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const VisibleUserDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerDisplay);

export default VisibleUserDisplay;
