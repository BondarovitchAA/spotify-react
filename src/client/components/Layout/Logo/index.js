import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './style.scss';

const Logo = ({ className, text }) => {
  const logoClass = classNames('logo', className);

  return (
    <div className={logoClass}>
      <Link to='/' className='logo__link'>
        <img className='logo__image' src='/images/spotify-logo.png' />
        <div className='logo__text-container'><span className='logo__text'>{text}</span></div>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export default Logo;
