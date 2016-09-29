import { connect } from 'react-redux';
import GameList from '../components/game_list';
import { fetchAllGames } from '../actions';



const mapStateToProps = (state) => ({
  games: state.games
});

const mapDispatchToProps = (dispatch) => ({
  getAllGames: () => {
    fetchAllGames(dispatch);
  }
});

const VisibleGameList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList);

export default VisibleGameList;
