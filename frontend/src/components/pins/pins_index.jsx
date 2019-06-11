import React, { Component } from 'react';
import StackGrid from 'react-stack-grid';
import PinsIndexItem from '../pins/pins_index_item';
import './pins.css';

class PinsIndex extends Component {
  componentDidMount() {
    this.props.fetchPins();
    this.props.fetchUserBoards(this.props.userId);
  }

  render() {
    const { pins, openModal } = this.props;
    if (!this.props.pins) return null;

    const pinItems = pins.map(pin => {
      return (
        <div style={{ zIndex: 'none' }}>
          <PinsIndexItem key={pin._id} pin={pin} />
        </div>
      );
    });

    // const gridStyle = {z-index: }

    return (
      <StackGrid
        columnWidth={260}
        monitorImagesLoaded='true'
        // style={{ zIndex: '40' }}
      >
        {pinItems}
      </StackGrid>
    );
  }
}

export default PinsIndex;
