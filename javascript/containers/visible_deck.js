import React from 'react';
import { connect } from 'react-redux';
import { updateDeck } from '../actions';
import Deck from '../components/deck';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateDeckPos: (pos) => {
    dispatch(updateDeck(pos));
  }
});

const VisibleDeck = connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);

export default VisibleDeck;
