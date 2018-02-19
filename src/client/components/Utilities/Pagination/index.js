import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './style.scss';

const Pagination = ({ className, onPreviousClick, onNextClick }) => {
  const paginationClass = classNames('pagination', className);

  return (
    <div className={paginationClass}>
      <button
        className='pagination__button pagination__left'
        onClick={onPreviousClick}
      >
        <i/><i/>
      </button>
      <button
        className='pagination__button pagination__right'
        onClick={onNextClick}
      >
        <i/><i/>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  className : PropTypes.string,
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired
};

export default Pagination;

