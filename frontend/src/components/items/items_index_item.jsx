import React from 'react';
import { Link } from 'react-router-dom';
// import CreateItemForm from './create_item_form';
// import './pins.css';

class PinsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _id, imageUrl, linkUrl } = this.props.item;
    const pinLink = linkUrl === '' ? imageUrl : linkUrl;

    return (
      <div className='pins-index-item-holder'>
        {/* <CreateItemForm pinId={_id} /> */}
        <a className='pins-index-item-link' href={pinLink}>
          <div className='pins-index-item-container'>
            <div className='pins-index-item-bg'>
              <div className='pins-index-item'>
                <div className='pins-index-item-image-container'>
                  <img className='pins-index-item-image' src={`${imageUrl}`} />
                  <div className='pins-index-item-image-overlay' />
                  {/* put save item */}
                </div>
                <div className='pins-index-item-tail-container'>
                  <div className='pins-index-item-tail' />
                  <div className='pins-index-item-menu'>
                    {/* place holder for menu icon */}
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default PinsIndexItem;
