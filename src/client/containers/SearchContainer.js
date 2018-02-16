import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from 'actions/searchActions';

import Search from 'components/Search/SearchPage';

const mapStateToProps = state => {
  return {
    ...state.search
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
