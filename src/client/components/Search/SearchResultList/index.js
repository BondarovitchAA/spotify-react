import React from 'react';

import SearchResultItem from 'components/Search/SearchResultItem';

const SearchResultList = ({ items }) => (
  items.map(item => {
    return  <SearchResultItem item={item} key={item.id} />;
  })
);

export default SearchResultList;
