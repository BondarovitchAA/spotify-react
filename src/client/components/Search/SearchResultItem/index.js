import React from 'react';
import PropTypes from 'prop-types';

const SearchResultItem = ({ item }) => {
  return (<div>{item.id}</div>);
};

SearchResultItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default SearchResultItem;
