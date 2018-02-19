import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './style.scss';

const Pagination = ({ className, onPreviousClick, onNextClick, isFirst, isLast }) => {
  const paginationClass = classNames('pagination', className);
  const previousClass = classNames(
    'pagination__button',
    'pagination__left',
    { 'pagination--disabled': isFirst });
  const nextClass = classNames(
    'pagination__button',
    'pagination__right',
    { 'pagination--disabled': isLast });

  return (
    <div className={paginationClass}>
      <button className={previousClass} onClick={onPreviousClick}>
        <i/><i/>
      </button>
      <button className={nextClass} onClick={onNextClick}>
        <i/><i/>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  className : PropTypes.string,
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool
};

export default Pagination;

