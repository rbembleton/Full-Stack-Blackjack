import React from 'react';
import GameActions from '../containers/game_actions';

const PlayerDisplay = ({ game, player, username, cards, hand, isCurrentUser }) => {

  return (
    <div style={{border: '1px solid black'}}>
      <h2>{username}</h2>
      {cards.map((card, idx) => <h3 key={idx}>{card.name}</h3>)}
      {isCurrentUser ? <GameActions /> : <GameActions />}
    </div>
  );

}

export default PlayerDisplay;
