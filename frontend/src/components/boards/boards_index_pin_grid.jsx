import React from 'react';
import './boards_index_pin_grid.css';

const BoardsIndexPinGrid = () => {
  return (
    <div className='pin-grid-container'>
      <div className='pin-grid-square top left' />
      <div className='pin-grid-square mid' />
      <div className='pin-grid-tall' />
      <div className='pin-grid-square bottom' />
      <div className='pin-grid-square bottom mid' />
      <div className='pin-grid-short' />
    </div>
  );
};

export default BoardsIndexPinGrid;
