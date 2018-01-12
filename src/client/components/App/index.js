import React, { PureComponent } from 'react';

import SideBar from 'components/SideBar';
import MainPanel from 'components/MainPanel';

import './style.scss';

class App extends PureComponent {
  render() {
    return (
      <div className='container container--dark'>
        <SideBar className='container__sidebar' />
        <MainPanel className='container__main-panel' />
      </div>
    );
  }
}

export default App;
