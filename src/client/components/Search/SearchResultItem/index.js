import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SearchResultItem = ({ item }) => {
  const { album, name, artists } = item;
  const defaultImageUrl = '/images/default_album.png';
  const images = album.images;
  const imageUrl = images && images[0] && images[0].url;

  return (
    <div className='search-item'>
      <img className='search-item__image' src={imageUrl || defaultImageUrl}/> :
      <div className='search-item__info'>
        <div className='search-item__text'>
          <i className='fa fa-users search-item__icon' />
          <span>{artists.map(artist => artist.name).join(', ')}</span>
        </div>
        <div className='search-item__text'>
          <i className='fa fa-book search-item__icon' />
          <span>{album.name}</span>
        </div>
        <div className='search-item__text'>
          <i className='fa fa-music search-item__icon' />
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

SearchResultItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default SearchResultItem;
