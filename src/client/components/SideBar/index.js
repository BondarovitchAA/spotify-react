import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Logo from 'components/Logo';
import Navigation from 'components/Navigation';

import './style.scss';

const SideBar = ({ className, routes, currentRoute }) => {
  const sideBarClass = classNames('sidebar', className);

  return (
    <section className={sideBarClass}>
      <Logo className='sidebar__item' text='Spotify Search' />
      <Navigation
        routes={routes}
        currentRoute={currentRoute}
        className='sidebar__item sidebar__navigation'
      />
    </section>
  );
};

SideBar.propTypes = {
  className : PropTypes.string,
  routes : PropTypes.arrayOf(PropTypes.object).isRequired,
  currentRoute: PropTypes.object.isRequired
};

export default SideBar;
