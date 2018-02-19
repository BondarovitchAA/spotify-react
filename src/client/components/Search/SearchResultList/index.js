import React from 'react';
import PropTypes from 'prop-types';

import ScrollArea from 'react-scrollbar';
import SearchResultItem from 'components/Search/SearchResultItem';

const SearchResultList = ({ items }) => {
  const wrappedItems = items.map(item => {
    return <SearchResultItem item={item} key={item.id} />;
  });

  return (
    <ScrollArea speed={0.8}>
      {wrappedItems}
    </ScrollArea>);
};

SearchResultList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default SearchResultList;
