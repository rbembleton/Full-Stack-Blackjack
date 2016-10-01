import React, { Component } from 'react';
// import Card from './card';

class Deck extends Component {

  render () {
    return (
      <div className="deck">
        <div className="card-back" style={{ top: '4px', left: '4px' }}/>
        <div className="card-back" style={{ top: '3px', left: '3px' }}/>
        <div className="card-back" style={{ top: '2px', left: '2px' }}/>
        <div className="card-back" style={{ top: '1px', left: '1px' }}/>
        <div
          className="card-back"
          style={{ top: '0px', left: '0px' }}
          draggable={true}/>
      </div>
    );
  }
}

export default Deck;
