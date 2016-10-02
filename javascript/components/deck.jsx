import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
// import Card from './card';

class Deck extends Component {
  static propTypes = {
    updateDeckPos: PropTypes.func
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateDeckPos.bind(this));
    this.updateDeckPos();
  }

  updateDeckPos () {
    const myRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.props.updateDeckPos([myRect.left, myRect.top])
  }

  componentWillUnmount () {
    removeEventListener('resize', this.updateDeckPos.bind(this));
  }

  render () {
    return (
      <div id="deck">
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
