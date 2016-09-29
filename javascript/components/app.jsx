import React, { Component } from 'react';
import HeaderCont from '../containers/header_cont';


class App extends Component {

  render () {
    return (
      <div>
        <HeaderCont />
        {this.props.children}
      </div>
    );
  }

}

export default App;
