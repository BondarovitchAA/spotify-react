import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SearchResultItem = ({ item }) => {
  return (
    <div className='search-result-item'>{item.id}</div>
  );
};

SearchResultItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default SearchResultItem;
