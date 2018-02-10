import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactAutoBinder from 'react-auto-binder';
import { Redirect } from 'react-router-dom';
import './style.scss';

class Login extends PureComponent {
  handleClick = () => {
    this.props.sendAuthorizeRequest();
  }

  render() {
    if (this.props.code) {
      this.props.authorize(this.props.code);
      return <Redirect to='/' />;
    }
    return (
      <div className='login'>
        <button className='login__button' onClick={this.handleClick}>
          <span className='login__text'>Sign In Using Spotify</span>
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  sendAuthorizeRequest : PropTypes.func.isRequired,
  authorize: PropTypes.func.isRequired,
  code: PropTypes.string
};

export default ReactAutoBinder(Login);
