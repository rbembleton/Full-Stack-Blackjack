import React from 'react';
import VisibleUserDisplay from '../containers/visible_user_display';
import VisibleDealerDisplay from '../containers/visible_dealer_display';

const PlayingField = ({ game, users, dealer }) => {
  return (
    <div className="playing-field">
      Playing Field:
      <VisibleDealerDisplay myClass="dealer-display" dealerId={dealer.id} />
      {Object.keys(users).map((userId, idx) => <VisibleUserDisplay key={idx} myClass="user-display" userId={parseInt(userId)}/>)}
    </div>
  );

}

export default PlayingField;
