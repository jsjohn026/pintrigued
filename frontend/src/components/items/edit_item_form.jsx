import React from 'react';
import { connect } from 'react-redux';
import { updateItem, deleteItem } from '../../actions/item_actions';
import '../modal/modal.css';
import "./edit_item.css";

class UpdateItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBoard(this.state)
      .then(() => this.props.closeModal());
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  render() {
    const { closeModal, item, deleteItem } = this.props;

    return (
      <div>
        <div className="modal-container" onClick={closeModal}>
        </div>
        <div className="modal-content">
          <div
            className="edit-item-form-container">
            <button onClick={closeModal} className={`modal-close`}>
              <i className='fas fa-times' />
            </button>
            <form>
              <div className="edit-item-name">
                <label>Name</label>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                />
              </div>
              <div className='edit-item-description'>
                <label>Description</label>
                <textarea
                  value={this.state.description}
                  cols="50"
                  rows="4"
                  onChange={this.update("description")}></textarea>
              </div>
              <div className="edit-item-buttons">
                <button onClick={
                  (e) => {
                    e.preventDefault();
                    deleteBoard(item._id);
                    closeModal();
                  }}>Delete</button>
                <button onClick={
                  (e) => {
                    e.preventDefault();
                    closeModal();
                  }}>Cancel</button>
                <input
                  type="submit"
                  value="Save"
                  onClick={this.handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let item = ownProps.item;
  return ({
    item: item
  });
};

const mapDispatchToProps = dispatch => {
  return {
    updateBoard: item => dispatch(updateBoard(item)),
    deleteBoard: itemId => dispatch(deleteBoard(itemId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateItemForm);
