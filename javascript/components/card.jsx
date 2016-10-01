import React, { Component, PropTypes } from 'react';
import { color, rank, suit } from '../constants';

class Card extends Component {
  static propTypes = {
    card: PropTypes.object
  }

  constructor (props) {
    super(props);
    this.state = { flipped: this.props.card.hidden };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.card.hidden === false && this.props.card.hidden === true) {
      this.setState({ flipped: true });
      let that = this;
      this.flipTimeout = setTimeout(() => {
        that.setState({ flipped: false });
      }, 50);
    }
  }

  componentWillUnmount () {
    clearTimeout(this.flipTimeout);
  }

  render () {
    return (
      <div className={`card unsel ${this.state.flipped ? 'is-flipped' : ''}`} draggable="true">
        <div className="flipper">
          <div className="card-back"/>
          {this.props.card.hidden ? null :
            <div className="card-front">
              {['top-left', 'center', 'bottom-right'].map((cName, idx) => {
                return (
                  <div className={cName} key={idx} style={{color: color(this.props.card.num)}}>
                    {(cName !== 'center') ? <span>{rank(this.props.card.num)}<br/></span> : null}
                    {`${suit(this.props.card.num)}`}
                  </div>
                );
              })}
            </div>
          }
        </div>
      </div>
    );
  }

}

export default Card;
