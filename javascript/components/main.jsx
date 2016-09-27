import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddGame from '../containers/add_game';
import VisibleGameList from '../containers/visible_game_list';

class Main extends Component {

  render () {
    return (
      <div>
        <VisibleGameList />
        <AddGame />
      </div>
    );
  }

}

export default connect()(Main);
