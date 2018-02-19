import settings from 'constants/constants';
import { actionTypes } from './actionTypes';
import { fetchWithToken } from './helpers';

export const requestSearch = () => {
  return {
    type: actionTypes.REQUEST_SEARCH
  };
};

export const receiveSearchResults = (results) => {
  return {
    type: actionTypes.RECEIVE_SEARCH,
    payload: {
      results: results.tracks
    }
  };
};

export const fetchSearchResults = (searchQuery) => {
  const url = `${settings.apiUrl}v1/search?q=${searchQuery || ''}&type=track;`;

  return dispatch => {
    dispatch(requestSearch());
    return fetchWithToken(url)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveSearchResults(json)));
  };
};

export const fetchPage = (nextUrl) => {
  return dispatch => {
    dispatch(requestSearch());
    return fetchWithToken(nextUrl)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveSearchResults(json)));
  };
};
