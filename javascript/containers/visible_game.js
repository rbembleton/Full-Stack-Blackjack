import { connect } from 'react-redux';
import Game from '../components/game';
import { fetchGame } from '../actions';

const mapStateToProps = (state) => ({
  game: state.currentGame,
  users: state.currentGame.users,
  isJoined: state.currentGame.users ?
    !!(state.currentGame.users.find((user) => user.id === state.currentUser.id)) :
    false,
  winner: state.currentGame.winner
});

const mapDispatchToProps =  (dispatch) => ({
  updateGame: (gameId) => {
    fetchGame(gameId, dispatch);
  }
});

const VisibleGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default VisibleGame;
