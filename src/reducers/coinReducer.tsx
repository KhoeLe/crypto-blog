import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FetchDataActionTypes } from "../types/fetchCoin";

  interface CoinState {
    coins: any[];
    loading: boolean;
    error: null | string;
  }

  const initialState: CoinState = {
    coins: [],
    loading: false,
    error: null,
  };

  const coinReducer = (
    state = initialState,
    action: FetchDataActionTypes
  ): CoinState => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          coins: action.payload,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: true,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export default coinReducer;
