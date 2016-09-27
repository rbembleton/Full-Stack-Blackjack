import React, { Component } from 'react';
import SignInForm from '../containers/sign_in_form';
import CurrentUser from '../containers/current_user';

class Header extends Component {

  render () {
    return (
      <nav>
        <SignInForm />
        <CurrentUser />
      </nav>
    );
  }
}

export default Header;
