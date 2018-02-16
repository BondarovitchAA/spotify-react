import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Player = ({ className }) => {
  const playerClass = classNames('player', className);

  return (
    <div className={playerClass}>
      <div className='player__leftside'>
        <div className='player__icon-container'>
          <i className='player__icon fa fa-step-backward' aria-hidden='true' />
        </div>
      </div>
      <div className='player__main'>
        <div className='player__device-container'>
          <i className='player__device fa fa-ban' aria-hidden='true'/>
        </div>
        <div className='player__instruments-container'>
          <i className='player__instrument fa fa-refresh' aria-hidden='true' />
          <i className='player__instrument fa fa-play-circle' aria-hidden='true' />
          <i className='player__instrument fa fa-music' aria-hidden='true' />
        </div>
        <div className='player__text-container'>
          <span className='player__no-tracks-text'>There are no playing tracks</span>
        </div>
      </div>
      <div className='player__rightside'>
        <div className='player__icon-container'>
          <i className='player__icon fa fa-step-forward' aria-hidden='true' />
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  className: PropTypes.string
};

export default Player;

