import React from 'react';
import VisibleLogInForm from '../containers/visible_log_in_form';
import VisibleSignUpForm from '../containers/visible_sign_up_form';
import CurrentUser from '../containers/current_user';

const Header = ({ isLoggedIn, whichForm }) => {

  return (
    <nav>
      <div className="title unsel">
        <div className="bj-logo"/>
        <h1>Blackjack</h1>
      </div>
      { isLoggedIn ?
        <CurrentUser /> : (
          whichForm === 'login' ?
          <VisibleLogInForm /> :
          <VisibleSignUpForm />
        )
      }
    </nav>
  );
}

export default Header;
