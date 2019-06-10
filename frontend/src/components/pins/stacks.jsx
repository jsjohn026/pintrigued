import React, { Component } from 'react';
import StackGrid from 'react-stack-grid';
import PinsIndexItem from '../pins/pins_index_item'
import './pins.css'
 
class Stacks extends Component {
  componentDidMount() {
    this.props.fetchPins()
    this.props.fetchUserBoards(this.props.userId)
  }
  
  render() {
    const { pins, openModal } = this.props;
    if (!this.props.pins) return null;

    const pinItems = pins.map(pin => {
      return (
        <PinsIndexItem key={ pin._id } pin={ pin } />
      )
    })
      
    return (
      <StackGrid columnWidth={260}>
        { pinItems }
      </StackGrid>
    );
  }
}

export default Stacks