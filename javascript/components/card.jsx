import React, { Component } from 'react';
import { color, rank, suit } from '../constants';

class Card extends Component {

  render () {
    return (
      <div style={{display: 'inline-block', float: 'left', border: '1px solid black'}}>
        {this.props.card.hidden ?
        <div>
          XX
        </div> :
        <div style={{color: color(this.props.card.num)}}>
          {`${rank(this.props.card.num)}${suit(this.props.card.num)}`}
        </div>
        }
      </div>
    );
  }

}

export default Card;
