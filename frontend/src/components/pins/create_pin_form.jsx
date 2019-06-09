import React from 'react';
import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import { createItem } from '../../actions/item_actions';
import { fetchUserBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import CreateBoardForm from '../boards/create_board_form';
import Dropzone from 'react-dropzone';
import './create_pin.css';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      imageFile: null,
      tempImageURL: null,
      linkUrl: '',
      photoPicked: false,
      optionsOpen: false,
      selectedBoardName: 'Select',
      selectedBoardId: null,
      fileRejected: false
    };
    this.onDrop = this.onDrop.bind(this);
    this.resetPhoto = this.resetPhoto.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.selectBoard = this.selectBoard.bind(this);
    this.handleRejection = this.handleRejection.bind(this);
  }

  componentDidMount() {
    const { fetchUserBoards, currentUser } = this.props;
    fetchUserBoards(currentUser);
  }

  onDrop(file) {
    this.setState({
      imageFile: file[0],
      tempImageURL: URL.createObjectURL(file[0]),
      photoPicked: true,
      fileRejected: false
    });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      title,
      description,
      imageFile,
      linkUrl,
      selectedBoardId
    } = this.state;
    const { createItem, createPin, currentUser } = this.props;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('linkUrl', linkUrl);
    formData.append('file', imageFile);
    createPin(formData).then(pin => {
      createItem({ pinId: pin._id, boardId: selectedBoardId }).then(() =>
        this.props.history.push(`/users/${currentUser}/boards`)
      );
    });
  }

  resetPhoto() {
    this.setState({ photoPicked: false, tempImageURL: null, imageFile: null });
  }

  toggleOptions(e) {
    e.preventDefault();
    this.setState({ optionsOpen: !this.state.optionsOpen });
  }

  selectBoard(board) {
    this.setState({
      selectedBoardName: board.title,
      selectedBoardId: board.id,
      optionsOpen: false
    });
  }

  handleRejection() {
    this.setState({ fileRejected: true });
  }

  render() {
    const {
      tempImageURL,
      photoPicked,
      optionsOpen,
      selectedBoardName,
      fileRejected
    } = this.state;
    const { userBoards, openModal, errors } = this.props;
    let rejectedStyle = fileRejected ? 'rejected' : null;

    const boardOptions = userBoards.map((board, i) => {
      return (
        <ul key={i} onClick={() => this.selectBoard(board)}>
          {board.title}
        </ul>
      );
    });

    const errorList = errors.length
      ? errors.map(error => {
          return <li>{error}</li>;
        })
      : null;

    return (
      <div className='create-pin-main-container'>
        <div className='create-pin-form-container'>
          <form
            className='create-pin-form'
            onSubmit={this.handleSubmit.bind(this)}
          >
            <div className='form-errors-container'>
              <div className='form-errors'>{errorList}</div>
            </div>
            <div className='create-pin-save'>
              <div className='select-board-button'>
                <button onClick={this.toggleOptions}>
                  <div className='selected-board-name'>{selectedBoardName}</div>
                  <i className='fas fa-chevron-down' />
                </button>
              </div>
              <input type='submit' value='Save' />
            </div>
            <div className='create-pin-form-content'>
              {!photoPicked && (
                <div className={`dropzone-container ${rejectedStyle}`}>
                  <Dropzone
                    onDropAccepted={this.onDrop}
                    accept='image/*'
                    onDropRejected={this.handleRejection}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()} className='dropzone-content'>
                        <input {...getInputProps()} />
                        {fileRejected && <p>Please select an image file</p>}
                        <i className='fas fa-arrow-circle-up' />
                        <p>Drag and drop or click to upload</p>
                      </div>
                    )}
                  </Dropzone>
                </div>
              )}
              {tempImageURL && (
                <div className='pin-image-preview'>
                  <img src={tempImageURL} alt='photo' />
                  <div className='pin-image-reset'>
                    <i className='fas fa-trash' onClick={this.resetPhoto} />
                  </div>
                </div>
              )}
              <div className='pin-info-input'>
                <div className='pin-form-title'>
                  <input
                    type='text'
                    placeholder='Add your title'
                    value={this.state.title}
                    onChange={this.update('title')}
                  />
                </div>
                <div className='pin-form-description'>
                  <input
                    type='text'
                    value={this.state.description}
                    placeholder='Tell everyone what your Pin is about'
                    onChange={this.update('description')}
                  />
                </div>
                <div className='pin-form-destination-link'>
                  <input
                    type='text'
                    value={this.state.linkUrl}
                    placeholder='Add a destination link'
                    onChange={this.update('linkUrl')}
                  />
                </div>
              </div>
            </div>
            {optionsOpen && (
              <div className='create-pin-board-options'>
                <div className='board-options-list'>{boardOptions}</div>
                <div
                  className='board-options-create-board'
                  onClick={() => openModal('createBoard')}
                >
                  <i className='fas fa-plus-circle' />
                  Create board
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

const mstp = state => {
  if (state.session.user) {
    return {
      currentUser: state.session.user.id,
      userBoards: Object.values(state.entities.boards),
      errors: state.errors.pins.concat(state.errors.items)
    };
  }
};

const mdtp = dispatch => ({
  createPin: pin => dispatch(createPin(pin)),
  createItem: item => dispatch(createItem(item)),
  fetchUserBoards: userId => dispatch(fetchUserBoards(userId)),
  openModal: content => dispatch(openModal(content))
});

export default connect(
  mstp,
  mdtp
)(CreatePinForm);
