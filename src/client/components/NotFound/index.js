// src/components/NotFound/index.js
import React, { PureComponent } from 'react';

import './style.scss';

export default class NotFound extends PureComponent {
  render() {
    return (
      <div className='NotFound'>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}
