import React from 'react';
import VisibleUserDisplay from '../containers/visible_user_display';
import VisibleDealerDisplay from '../containers/visible_dealer_display';

const PlayingField = ({ game, users, dealer }) => {
  return (
    <div style={{border: '1px solid black'}}>
      Playing Field:
      {Object.keys(users).map((userId, idx) => <VisibleUserDisplay key={idx} userId={userId}/>)}
      <VisibleDealerDisplay dealerId={dealer.id} />
    </div>
  );

}

export default PlayingField;
