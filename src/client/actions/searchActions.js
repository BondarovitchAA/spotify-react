import settings from 'constants/constants';
import { actionTypes } from './actionTypes';
import * as spotifyAPIService from 'helpers/spotifyAPIService';

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
    return spotifyAPIService.get(url)
      .then(results => dispatch(receiveSearchResults(results)));
  };
};

export const fetchPage = (nextUrl) => {
  return dispatch => {
    dispatch(requestSearch());
    return spotifyAPIService.get(nextUrl)
      .then(results => dispatch(receiveSearchResults(results)));
  };
};
