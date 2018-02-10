import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const NavigationLink = ({ route }) => {
  const { url, icon, title } = route;

  return (
    <Link to={url} className='navigation-link'>
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
  }).isRequired
};

export default NavigationLink;

