import React from 'react';
import VisibleUserDisplay from '../containers/visible_user_display';
import VisibleDealerDisplay from '../containers/visible_dealer_display';

const PlayingField = ({ game, users, dealer }) => {

  function playerMap () {
    const userMap = users.map((user, idx) => {
      return <VisibleUserDisplay key={idx} myClass="user-display" userId={user.id}/>;
    });
    const numUsers = users.length

    return (
      <div className="users-playing-field-display">
        <div className="first-row">
          {numUsers > 1 ? userMap.slice(0, 1).concat(userMap.slice(-1)) : userMap[0]}
        </div>
        {numUsers > 2 ?
          <div className="second-row">
            {userMap.slice(1, -1)}
          </div> : null
        }
      </div>
    );
  }
  // {Object.keys(users).map((userId, idx) => <VisibleUserDisplay key={idx} myClass="user-display" userId={parseInt(userId)}/>)}

  return (
    <div className="playing-field">
      <div className="dealer-row">
        <VisibleDealerDisplay myClass="dealer-display" dealerId={dealer.id} />
      </div>
      {playerMap()}
    </div>
  );

}

export default PlayingField;
