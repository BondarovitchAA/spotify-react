import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbars } from 'react-custom-scrollbars';
import SearchResultItem from 'components/Search/SearchResultItem';

import './style.scss';

const SearchResultList = ({ items }) => {
  const wrappedItems = items.map(item => {
    return <SearchResultItem item={item} key={item.id} />;
  });

  return (
    <Scrollbars>
      <div className='search-result-list'>
        {wrappedItems}
      </div>
    </Scrollbars>
  );
};

SearchResultList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default SearchResultList;
