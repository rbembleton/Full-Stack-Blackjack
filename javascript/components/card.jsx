import React, { Component } from 'react';
import { color, rank, suit } from '../constants';

class Card extends Component {

  render () {
    return (
      <div className="card unsel" draggable="true">
        {this.props.card.hidden ?
        <div className="hidden">
        </div> :
        ['top-left', 'center', 'bottom-right'].map((cName, idx) => {
          return (
            <div className={cName} key={idx} style={{color: color(this.props.card.num)}}>
              {(cName !== 'center') ? <span>{rank(this.props.card.num)}<br/></span> : null}
              {`${suit(this.props.card.num)}`}
            </div>
          );
        })
        }
      </div>
    );
  }

}

export default Card;
