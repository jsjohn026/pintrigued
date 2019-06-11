import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { fetchUserBoards } from '../../actions/board_actions'
import { closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = state => {
  const userId = state.session.user ? state.session.user.id : null
  return {
    errors: state.errors.session,
    userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    fetchUserBoards: userId => dispatch(fetchUserBoards(userId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
