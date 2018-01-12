import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from 'components/App';

class Routes extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={App} />
      </BrowserRouter>
    );
  }
}

export default Routes;
