import React from 'react';
import GameActions from '../containers/game_actions';
import Card from './card';

const PlayerDisplay = ({ game, player, username, cards, hand,
  myClass, isCurrentUser, isCurrentPlayer, isWinner }) => {

  return (
    <div className={`player-display ${myClass} ${isCurrentPlayer ? 'current-player' : ''} clearfix`}>
      <h2>{username}</h2>
      <div className="player-hand clearfix">
        {cards.map((card, idx) => <Card key={idx} card={card} />)}
      </div>
      {isCurrentUser ?
        <div className='player-stats'>
          {hand.is_busted ? <strong>BUSTED! </strong> : null}
          {`Best Value: ${hand.best_value}, Lowest Value: ${hand.lowest_value}`}
          {isCurrentPlayer ? <GameActions /> : null}
        </div> : null}
      {isWinner && game.status === 'finished' ? <div className="winner-status unsel">WINNER</div> : null}
    </div>
  );

}

export default PlayerDisplay;
