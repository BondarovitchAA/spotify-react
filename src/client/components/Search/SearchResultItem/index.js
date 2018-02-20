import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SearchResultItem = ({ item }) => {
  const defaultImageUrl = '/images/default_album.png';
  const images = item.album.images;
  const imageUrl = images && images[0] && images[0].url;

  return (
    <div className='search-item'>
      <img className='search-item__image' src={imageUrl || defaultImageUrl}/> :
      <div className='search-item__info'><i/></div>
    </div>
  );
};

SearchResultItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default SearchResultItem;
