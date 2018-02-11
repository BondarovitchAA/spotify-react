import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './style.scss';

const NavigationLink = ({ route, isActive }) => {
  const { url, icon, title } = route;
  const navigationLinkClassName = classNames('navigation-link', { 'navigation-link--active' : isActive });

  return (
    <Link to={url} className={navigationLinkClassName}>
      <span className='navigation-link__icon'>
        <i className={icon} aria-hidden='true' />
      </span>
      <div className='navigation-link__text-container'>
        <span className='navigation-link__text'>{title}</span>
      </div>
    </Link>
  );
};

NavigationLink.propTypes = {
  route: PropTypes.shape({
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired
};

export default NavigationLink;

