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
      imageURL: null
    };
  }

  handlePhoto(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageURL: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {}

  render() {}
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
