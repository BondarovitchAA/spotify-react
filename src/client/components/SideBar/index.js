import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import NavigationLink from 'components/NavigationLink';

import './style.scss';

class SideBar extends PureComponent {
  render() {
    const sideBarClass = classNames('sidebar', this.props.className);

    return (
      <section className={sideBarClass}>
        <Logo className='sidebar__item' text='Spotify Search' />
        <Navigation className='sidebar__item sidebar__navigation'>
          <NavigationLink url='/' text='Search' icon='fa fa-search' />
          <NavigationLink url='/' text='Now Playing' icon='fa fa-music' />
          <NavigationLink url='/' text='My Playlists' icon='fa fa-list-ol' />
        </Navigation>
      </section>
    );
  }
}

SideBar.propTypes = {
  className : PropTypes.string
};

export default SideBar;
