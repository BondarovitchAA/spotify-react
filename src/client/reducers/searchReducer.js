import { actionTypes } from 'actions/actionTypes';

const searchReducer = (state =
  {
    searchQuery: '',
    isFetching: false,
    results: [],
    pagination: {
      total: 0,
      previous: null,
      next: null
    }
  }, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_SEARCH :
      return {
        isFetching: true,
        ...state
      };
    case actionTypes.RECEIVE_SEARCH:
      return {
        isFetching: false,
        results: action.payload.results.items,
        pagination: {
          total: action.payload.results.total,
          previous: action.payload.results.previous,
          next: action.payload.results.next

        }
      };
    default:
      return state;
  }
};

export default searchReducer;
