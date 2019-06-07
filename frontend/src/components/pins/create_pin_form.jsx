import React from 'react';
import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      imageFile: null,
      tempImageURL: null
    };
    // this.update = this.update.bind(this);
  }

  handlePhoto(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, tempImageURL: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, description, imageFile } = this.state;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', imageFile);
    // console.log(formData.entries())
    this.props.createPin(formData);
  }

  render() {
    const imagePreview = this.state.tempImageURL ? (
      <img src={this.state.tempImageURL} alt='song' />
    ) : (
      <div className='empty-photo-container' />
    );
    return (
      <div className='create-pin-form-container'>
        <form
          className='create-pin-form'
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div className='form-image-container'>
            {imagePreview}
            <input
              type='file'
              onChange={this.handlePhoto.bind(this)}
              value=''
              accept='image/jpg, image/jpeg, image/png, image/tiff'
            />
          </div>
          <input
            type='text'
            placeholder='Add your title'
            value={this.state.title}
            onChange={this.update('title')}
          />
          <input
            type='text'
            value={this.state.description}
            placeholder='Tell everyone what your Pin is about'
            onChange={this.update('description')}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

const mstp = state => ({
  currentUser: state.session.user.id
});

const mdtp = dispatch => ({
  createPin: pin => dispatch(createPin(pin))
});

export default connect(
  mstp,
  mdtp
)(CreatePinForm);
