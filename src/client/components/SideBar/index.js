import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Logo from 'components/Logo';
import Navigation from 'components/Navigation';

import './style.scss';

class SideBar extends PureComponent {
  render() {
    const sideBarClass = classNames('sidebar', this.props.className);

    return (
      <section className={sideBarClass}>
        <Logo className='sidebar__item' text='Spotify Search' />
        <Navigation className='sidebar__item' />
      </section>
    );
  }
}

SideBar.propTypes = {
  className : PropTypes.string
};

export default SideBar;
