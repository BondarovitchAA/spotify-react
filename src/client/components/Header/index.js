import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconButton from 'components/IconButton';

import './style.scss';

const Header = ({ className, title }) => {
  const headerClass = classNames('header', className);

  return (
    <header className={headerClass}>
      <h1 className='header__title'>{title}</h1>
      <div className='header__button-container'>
        <IconButton className='header__button' icon='fa fa-user' />
        <IconButton className='header__button icon-button--active' icon='fa fa-sign-out' />
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default withRouter(Header);
