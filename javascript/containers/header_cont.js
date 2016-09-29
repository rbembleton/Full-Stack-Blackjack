import { connect } from 'react-redux';
import Header from '../components/header';

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.currentUser.id,
  whichForm: state.toggleForm
});

const mapDispatchToProps =  ({

});

const HeaderCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderCont;
