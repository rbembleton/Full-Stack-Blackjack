import React from 'react';
import GameActions from '../containers/game_actions';
import Card from './card';

const PlayerDisplay = ({ game, player, username, cards, hand, isCurrentUser }) => {

  return (
    <div className="clearfix" style={{border: '1px solid black'}}>
      <h2>{username}</h2>
      {hand.is_busted ? 'BUSTED!' : null}
      {`Best Value: ${hand.best_value}, Lowest Value: ${hand.lowest_value}`}
      {cards.map((card, idx) => <Card key={idx} card={card} />)}
      {isCurrentUser ? <GameActions /> : <GameActions />}
    </div>
  );

}

export default PlayerDisplay;
