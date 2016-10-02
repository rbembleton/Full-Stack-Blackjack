import { connect } from 'react-redux';
import Card from '../components/card';

const mapStateToProps = (state, ownProps) => ({
  card: ownProps.card,
  position: ownProps.position,
  newCard: ownProps.newCard,
  deckPos: state.deckPosition,
  playerOffset: ownProps.playerOffset
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const VisibleCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default VisibleCard;
