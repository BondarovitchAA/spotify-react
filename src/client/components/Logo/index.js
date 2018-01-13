import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Logo extends PureComponent {
  render() {
    const logoClass = classNames('logo', this.props.className);

    return (
      <div className={logoClass}>
        <a href='#' className='logo__link'>
          <img className='logo__image' src='/images/spotify-logo.png' />
          <div className='logo__text-container'><span className='logo__text'>{this.props.text}</span></div>
        </a>
      </div>
    );
  }
}

Logo.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export default Logo;
