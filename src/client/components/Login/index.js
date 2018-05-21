import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactAutoBinder from 'react-auto-binder';
import { Redirect } from 'react-router-dom';

import './style.scss';

class Login extends PureComponent {
  componentWillMount() {
    if (this.props.accessToken && !this.props.isAuthorized) {
      sessionStorage.setItem('accessToken', this.props.accessToken);
      const tokenExpires = new Date();

      tokenExpires.setSeconds(tokenExpires.getSeconds() + this.props.expiresIn);
      sessionStorage.setItem('tokenExpires', tokenExpires);
      this.props.authorizeSuccess(this.props.accessToken);
    }
  }

  render() {
    if (this.props.isAuthorized && this.props.accessToken) {
      return <Redirect to={this.props.redirectedFrom || '/'} />;
    }
    return (
      <div className='login'>
        {this.props.error && <div className='login__error'>Error: Authorization Failed.</div>}
        <a href='/api/login' className='login__button'>
          <span className='login__text'>Sign In Using Spotify</span>
        </a>
      </div>
    );
  }
}

Login.propTypes = {
  authorizeSuccess: PropTypes.func.isRequired,
  authorizeFailed: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  redirectedFrom: PropTypes.string,
  accessToken: PropTypes.string,
  expiresIn: PropTypes.number,
  error: PropTypes.string
};

export default ReactAutoBinder(Login);
