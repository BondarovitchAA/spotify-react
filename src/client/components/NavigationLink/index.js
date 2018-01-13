import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class NavigationLink extends PureComponent {
  render() {
    return (
      <a href={this.props.url} className='navigation-link'>
        <span className='navigation-link__icon'>
          <i className={this.props.icon} aria-hidden='true' />
        </span>
        <div className='navigation-link__text-container'>
          <span className='navigation-link__text'>
            {this.props.text}
          </span>
        </div>
      </a>
    );
  }
}

NavigationLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default NavigationLink;

