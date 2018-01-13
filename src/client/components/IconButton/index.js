import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class IconButton extends PureComponent {
  render() {
    const iconButtonClass = classNames('icon-button', this.props.className);
    const iconClass = classNames('icon-button__icon', this.props.icon);

    return (
      <button className={iconButtonClass}>
        <i className={iconClass} aria-hidden='true' />
      </button>
    );
  }
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default IconButton;
