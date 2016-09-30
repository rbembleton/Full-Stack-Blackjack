import { connect } from 'react-redux';
import PlayerDisplay from '../components/player_display';

const mapStateToProps = (state, ownProps) => ({
  game: state.currentGame,
  player: state.currentGame.users[ownProps.userId],
  username: state.currentGame.users[ownProps.userId].username,
  hand: state.currentGame.users[ownProps.userId].hand,
  cards: state.currentGame.users[ownProps.userId].hand.cards,
  isCurrentUser: (ownProps.userId === state.currentUser.id),
  myClass: ownProps.myClass
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const VisibleUserDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerDisplay);

export default VisibleUserDisplay;
