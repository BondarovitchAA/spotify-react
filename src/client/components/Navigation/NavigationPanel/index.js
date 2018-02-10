import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv4 from 'uuid/v4';

import NavigationLink from 'components/Navigation/NavigationLink';

import './style.scss';

const NavigationPanel = ({ className, routes }) => {
  const topClass = classNames('navigation', className);

  const wrappedNavItems = routes.map(route => {
    return (
      <li key={uuidv4()} className='navigation__item'>
        <NavigationLink route={route} />
      </li>
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
};

NavigationPanel.propTypes = {
  className : PropTypes.string,
  routes : PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NavigationPanel;

