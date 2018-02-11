import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const IconButton = ({ className, icon, onClick }) => {
  const iconButtonClass = classNames('icon-button', className);
  const iconClass = classNames('icon-button__icon', icon);

  return (
    <button className={iconButtonClass} onClick={onClick}>
      <i className={iconClass} aria-hidden='true' />
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default IconButton;
