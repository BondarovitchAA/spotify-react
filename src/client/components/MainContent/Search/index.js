import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactAutoBinder from 'react-auto-binder';
import classNames from 'classnames';

import './style.scss';

class Search extends PureComponent {
  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    const searchClass = classNames('search', this.props.className);

    return (
      <div className={searchClass}>
        <div className='search__input-container'>
          <input type='text' className='search__input' onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  className: PropTypes.string
};

export default ReactAutoBinder(Search);
