import React from 'react';
import './boards_index_pin_grid.css';

const BoardsIndexPinGrid = ({ items }) => {
  const imageUrls = items.map(item => item.imageUrl);
  return (
    <div className='pin-grid-container'>
      <div className='pin-grid-square top left'>
        {imageUrls[0] && <img src={imageUrls[0]} />}
      </div>
      <div className='pin-grid-square mid'>
        {imageUrls[1] && <img src={imageUrls[1]} />}
      </div>
      <div className='pin-grid-tall'>
        {imageUrls[2] && <img src={imageUrls[2]} />}
      </div>
      <div className='pin-grid-square bottom'>
        {imageUrls[3] && <img src={imageUrls[3]} />}
      </div>
      <div className='pin-grid-square bottom mid'>
        {imageUrls[4] && <img src={imageUrls[4]} />}
      </div>
      <div className='pin-grid-short'>
        {imageUrls[5] && <img src={imageUrls[5]} />}
      </div>
    </div>
  );
};

export default BoardsIndexPinGrid;
