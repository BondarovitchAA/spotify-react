import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import ReactAutoBinder from 'react-auto-binder';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconButton from 'components/Buttons/IconButton';

import './style.scss';

class Header extends PureComponent {
  handleUserProfileClick() {
    console.log('profile');
  }

  handleSignOutClick() {
    sessionStorage.removeItem('accessToken');
    this.props.signOut();
  }

  render() {
    const headerClass = classNames('header', this.props.className);

    return (
      <header className={headerClass}>
        <h1 className='header__title'>{this.props.title}</h1>
        <div className='header__button-container'>
          <IconButton
            onClick={this.handleUserProfileClick}
            className='header__button'
            icon='fa fa-user'
          />
          <IconButton
            onClick = {this.handleSignOutClick}
            className='header__button icon-button--active'
            icon='fa fa-sign-out'
          />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default withRouter(ReactAutoBinder(Header));
