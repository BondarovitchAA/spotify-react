import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Navigation extends PureComponent {
  render() {
    const topClass = classNames('navigation', this.props.className);

    const wrappedNavItems = React.Children.map(this.props.children, child => {
      return (
        <li className='navigation__item'>{child}</li>
      );
    });

    return (
      <nav className={topClass}>
        <div className='navigation__title-container'>
          <span className='navigation__title'>Navigate</span>
        </div>
        <ul className='navigation__list'>
          {wrappedNavItems}
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  className : PropTypes.string,
  children : PropTypes.arrayOf(PropTypes.element)
};

export default Navigation;

