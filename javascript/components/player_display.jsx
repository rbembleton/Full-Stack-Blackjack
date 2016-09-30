import React from 'react';
import GameActions from '../containers/game_actions';
import Card from './card';

const PlayerDisplay = ({ game, player, username, cards, hand, isCurrentUser, myClass }) => {
  // debugger

  return (
    <div className={`player-display ${myClass} clearfix`}>
      <h2>{username}</h2>
      <div className="player-hand clearfix">
        {cards.map((card, idx) => <Card key={idx} card={card} />)}
      </div>
      {isCurrentUser ?
        <div className='player-stats'>
          {hand.is_busted ? 'BUSTED! ' : null}
          {`Best Value: ${hand.best_value}, Lowest Value: ${hand.lowest_value}`}
          <GameActions />
        </div> : null}
    </div>
  );

}

export default PlayerDisplay;
