import React from 'react';
import PinsIndexItem from '../pins/pins_index_item';
import './pins.css';

class PinsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPins();
    this.props.fetchUserBoards(this.props.userId);
  }

  render() {
    const { pins, openModal } = this.props;
    if (!this.props.pins) return null;

    const pinItems = pins.map(pin => {
      return (
        <div key={pin._id}>
          <PinsIndexItem pin={pin} />
        </div>
      );
    });

    return (
      <div className='pins-index-container'>
        <div className='pins-index'>{pinItems}</div>
      </div>
    );
  }
}

export default PinsIndex;
