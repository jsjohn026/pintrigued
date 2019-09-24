import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { fetchUserBoards } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => {
  const userId = state.session.user ? state.session.user.id : null;
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    fetchUserBoards: userId => dispatch(fetchUserBoards(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
