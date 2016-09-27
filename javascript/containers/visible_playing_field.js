import { connect } from 'react-redux';
import PlayingField from '../components/playing_field';

const mapStateToProps = (state) => ({
  game: state.currentGame,
  users: state.currentGame.users,
  dealer: state.currentGame.dealer
});

const mapDispatchToProps =  ({

});

const VisiblePlayingField = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayingField);

export default VisiblePlayingField;
