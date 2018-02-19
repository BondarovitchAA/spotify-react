import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactAutoBinder from 'react-auto-binder';
import classNames from 'classnames';

import Loader from 'react-loader';
import SearchResultList from 'components/Search/SearchResultList';
import Pagination from 'components/Utilities/Pagination';

import './style.scss';

class Search extends PureComponent {
  handleChange(event) {
    if (event.target.value) {
      this.props.fetchSearchResults(event.target.value);
    }
  }

  handleNextPageClick() {
    if (this.props.pagination.next) {
      this.props.fetchPage(this.props.pagination.next);
    }
  }

  handlePreviousPageClick() {
    if (this.props.pagination.previous) {
      this.props.fetchPage(this.props.pagination.previous);
    }
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
        <div className='search__result-container'>
          <Loader loaded={!this.props.isFetching}>
            <SearchResultList items={this.props.results} />
            {this.props.results.length !== 0 &&
            <Pagination
              className='search__pagination'
              onPreviousClick={this.handlePreviousPageClick}
              onNextClick={this.handleNextPageClick}
              isFirst={!this.props.pagination.previous}
              isLast={!this.props.pagination.next}
            />
            }
          </Loader>
        </div>
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
