import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
import { color, rank, suit } from '../constants';

class Card extends Component {
  static propTypes = {
    card: PropTypes.object,
    position: PropTypes.array,
    newCard: PropTypes.bool,
    deckPos: PropTypes.array,
    playerOffset: PropTypes.array
  }

  constructor (props) {
    super(props);
    this.state = {
      flipped: this.props.card.hidden,
      position: this.props.position,
      newCard: this.props.newCard
    };
  }

  componentDidMount () {
    // const myRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    // [myRect.left, myRect.top]
    // console.log([myRect.left - this.props.deckPos[0], myRect.top - this.props.deckPos[1]]);
    this.setState({
      newCard: false,
      flipped: true,
      // position: [myRect.left - this.props.deckPos[0], myRect.top - this.props.deckPos[1]]
      position: [
        this.props.deckPos[0] - this.props.playerOffset[0] - 10,
        this.props.deckPos[1] - this.props.playerOffset[1] - 52
      ]
    })
    console.log([
      this.props.deckPos[0] - this.props.playerOffset[0] - 10,
      this.props.deckPos[1] - this.props.playerOffset[1] - 52
    ]);

    let that = this;
    this.updatePosTimeout = setTimeout(() => {
      that.setState({
        flipped: that.props.card.hidden === true,
        position: that.props.position
      });
    }, 50);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.card.hidden === false && this.props.card.hidden === true) {
      this.setState({ flipped: true });
      let that = this;
      this.flipTimeout = setTimeout(() => {
        that.setState({ flipped: false });
      }, 50);
    }

    if (newProps.position[0] !== this.state.position[0] ) {
      this.setState({ position: newProps.position });
    }
  }

  componentWillUnmount () {
    clearTimeout(this.flipTimeout);
    clearTimeout(this.updatePosTimeout);
  }

  render () {
    return (
      this.state.newCard ?
        <div
          className='new-card'
          style={{top: `${this.props.position[1]}px`, left: `${this.props.position[0]}px`}}/> :
        <div className={`card unsel ${this.state.flipped ? 'is-flipped' : ''}`}
          draggable="true"
          style={{top: `${this.state.position[1]}px`, left: `${this.state.position[0]}px`}}>
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
