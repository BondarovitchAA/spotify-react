import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactAutoBinder from 'react-auto-binder';
import classNames from 'classnames';

import Loader from 'react-loader';
import SearchResultList from 'components/Search/SearchResultList';

import './style.scss';

class Search extends PureComponent {
  handleChange(event) {
    if (event.target.value) {
      this.props.fetchSearchResults(event.target.value);
    }
  }

  handleNextPageClick() {
    this.props.fetchPage(this.props.pagination.next);
  }

  handlePreviousPageClick() {
    this.props.fetchPage(this.props.pagination.previous);
  }

  render() {
    const searchClass = classNames('search', this.props.className);

    return (
      <div className={searchClass}>
        <div className='search__input-container'>
          <input type='text' className='search__input' onChange={this.handleChange} />
        </div>
        <div className='search__total-container'>
          <span>{this.props.pagination.total} tracks were found.</span>
        </div>
        <Loader loaded={!this.props.isFetching}>
          <div className='search__result-container'>
            <SearchResultList items={this.props.results} />
            <button className='search__previous' onClick={this.handlePreviousPageClick}>&lt;</button>
            <button className='search__next' onClick={this.handleNextPageClick}>&gt;</button>
          </div>
        </Loader>
      </div>

    );
  }
}

Search.propTypes = {
  className: PropTypes.string,
  pagination: PropTypes.shape({
    total: PropTypes.number.isRequired,
    next: PropTypes.string,
    previous: PropTypes.string
  }),
  results: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchSearchResults: PropTypes.func.isRequired,
  fetchPage: PropTypes.func.isRequired
};

export default ReactAutoBinder(Search);
