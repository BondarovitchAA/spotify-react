import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Navigation extends PureComponent {
  render() {
    const topClass = classNames('navigation', this.props.className);

    return (
      <nav className={topClass}>
        navigation
      </nav>
    );
  }
}

Navigation.propTypes = {
  className : PropTypes.string
};

export default Navigation;

