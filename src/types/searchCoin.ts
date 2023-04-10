import { coins } from ".";

export const SEARCH_DATA_REQUEST = 'SEARCH_DATA_REQUEST';
export const SEARCH_DATA_SUCCESS = 'SEARCH_DATA_SUCCESS';
export const SEARCH_DATA_FAILURE = 'SEARCH_DATA_FAILURE';

interface SearchDataRequestAction {
  type: typeof SEARCH_DATA_REQUEST;
}

interface SearchDataSuccessAction {
  type: typeof SEARCH_DATA_SUCCESS;
  payload: coins[];
}

interface SearchDataFailureAction {
  type: typeof SEARCH_DATA_FAILURE;
  payload: string;
}

export type SearchDataActionTypes =
  | SearchDataRequestAction
  | SearchDataSuccessAction
  | SearchDataFailureAction;

export interface SearchState {
    searchResults: coins[];
    searchLoading: boolean;
    searchError: null | string;
  }
