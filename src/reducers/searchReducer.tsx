import { SEARCH_DATA_REQUEST, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILURE, SearchDataActionTypes } from "../types/searchCoin";

  interface SearchState {
    resultCoins: any[];
    loading: boolean;
    error: null | string;
  }

  const initialState: SearchState = {
    resultCoins: [],
    loading: false,
    error: null,
  };


  const searchReducer = (
    state = initialState,
    action: SearchDataActionTypes
  ): SearchState => {
    switch (action.type) {
      case SEARCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SEARCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          resultCoins: action.payload,
        };
      case SEARCH_DATA_FAILURE:
        return {
          ...state,
          loading: true,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export default searchReducer;
