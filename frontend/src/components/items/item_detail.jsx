import React from 'react';
import { connect } from 'react-redux';
import { fetchItem } from '../../actions/item_actions';
import { fetchPin } from '../../actions/pin_actions';
import { Link } from 'react-router-dom';
import './items.css';

class ItemDetail extends React.Component {
  componentDidMount() {
    this.props
      .fetchItem(this.props.match.params.pinId)
      .then(item => this.props.fetchPin(item.pinId));
  }

  // goBack() {
  //   this.props.history.goBack()
  // }

  render() {
    const { item, pin } = this.props;
    if (!pin) return null;
    let dispUrlBlock;
    if (pin.linkUrl) {
      let dispUrl = pin.linkUrl.split('www.')[1];
      dispUrl = dispUrl.split('/')[0];
      dispUrlBlock = (
        <a href={pin.linkUrl}>
          <div className='item-detail-link'>{dispUrl}</div>
        </a>
      );
    }
    return (
      <div className='item-detail-main-container'>
        <i
          class='fas fa-arrow-circle-left'
          onClick={this.props.history.goBack}
        />
        <div className='item-detail-container'>
          <div className='item-detail-content'>
            <div className='item-detail-image-container'>
              <a href={pin.linkUrl}>
                <div className='item-detail-image'>
                  <img src={item.imageUrl} />
                  <div className='item-detail-image-overlay' />
                </div>
              </a>
            </div>
            <div className='item-detail-info'>
              <div className='item-detail-title'>{item.title}</div>
              <div className='item-detail-description'>{item.description}</div>
              {dispUrlBlock}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mstp = (state, ownProps) => {
  const item = state.entities.items[ownProps.match.params.pinId];
  let pin;
  if (item) {
    pin = state.entities.pins[item.pinId];
  }
  return {
    item,
    pin
  };
};

const mdtp = dispatch => ({
  fetchItem: itemId => dispatch(fetchItem(itemId)),
  fetchPin: pinId => dispatch(fetchPin(pinId))
});

export default connect(
  mstp,
  mdtp
)(ItemDetail);
