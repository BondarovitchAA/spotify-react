import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';

import './style.scss';

class MainPanel extends PureComponent {
  render() {
    return (
      <section className='main-panel'>
        <Header title='Now playing' />
      </ section>
    );
  }
}

MainPanel.propTypes = {
};

export default MainPanel;

