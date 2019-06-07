import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});

const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: type => dispatch(openModal(type))
});

export default connect(
  mapStateToProps,
  mdtp
)(NavBar);
