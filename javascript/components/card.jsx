import React, { Component } from 'react';
import { color, rank, suit } from '../constants';

class Card extends Component {

  render () {
    return (
      <div style={{display: 'inline-block', float: 'left', border: '1px solid black'}}>
        <div style={{color: color(this.props.num)}}>
          {`${rank(this.props.num)}${suit(this.props.num)}`}
        </div>
      </div>
    );
  }

}

export default Card;
