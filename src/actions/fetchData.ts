import { Dispatch } from "redux";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FetchDataActionTypes,
  RootState,
} from "../types";

export const fetchData = () => {
  return async (dispatch: Dispatch<FetchDataActionTypes>, getState: () => RootState) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
      const data = await response.json();

      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
