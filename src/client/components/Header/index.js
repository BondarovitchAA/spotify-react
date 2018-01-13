import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconButton from 'components/IconButton';

import './style.scss';

class Header extends PureComponent {
  render() {
    const headerClass = classNames('header', this.props.className);

    return (
      <header className={headerClass}>
        <h1 className='header__title'>{this.props.title}</h1>
        <div className='header__button-container'>
          <IconButton className='header__button' icon='fa fa-user' />
          <IconButton className='header__button icon-button--active' icon='fa fa-sign-in' />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Header;
