import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateBoardForm from '../boards/create_board_form';
import SignupForm from '../session/signup_form_container';
import LoginForm from '../session/login_form_container';
import './modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { closing: false };
  }

  handleClick(e) {
    if (
      e.target.classList[0] === 'modal-container' ||
      e.target.classList[0] === 'fas'
    ) {
      this.setState({ closing: true });
      setTimeout(() => {
        this.props.closeModal();
        this.setState({ closing: false });
      }, 300);
    }
  }

  render() {
    const { type } = this.props;
    let form, fadeout, slideup;
    if (this.state.closing) {
      fadeout = 'fadeout';
      slideup = 'slideup';
    }
    switch (type) {
      case 'signup':
        form = <SignupForm />;
        break;
      case 'login':
        form = <LoginForm />;
        break;
      case 'createBoard':
        form = <CreateBoardForm />;
        break;
      default:
        return null;
    }

    return (
      <div className={`modal-container ${fadeout}`} onClick={this.handleClick}>
        <div className={`modal-content ${slideup}`}>
          <button onClick={this.handleClick} className={`modal-close`}>
            <i className='fas fa-times' />
          </button>
          <div className='modal-form'>{form}</div>
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  type: state.ui.modal
});

const mdtp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mstp,
  mdtp
)(Modal);
