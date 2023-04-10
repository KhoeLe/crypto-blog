import { Dispatch } from "redux";
import { RootState } from "../types";
import { FetchDataActionTypes, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../types/fetchCoin";
import { SEARCH_DATA_FAILURE, SEARCH_DATA_REQUEST, SEARCH_DATA_SUCCESS, SearchDataActionTypes } from "../types/searchCoin";

export const fetchAllCrypto = (page: number,currency: string,coinSearch: string , sortBy:string) => {
  return async (dispatch: Dispatch<FetchDataActionTypes>, getState: () => RootState) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    const url = process.env.URL_HOST_COINGECKO

    try {
      const response = await fetch(`${url}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`);
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
export const fetchSearchCrypto = (coinSearch: string ) => {
  return async (dispatch: Dispatch<SearchDataActionTypes>, getState: () => RootState) => {
    dispatch({ type: SEARCH_DATA_REQUEST });
    const url = process.env.URL_HOST_COINGECKO

    try {
      const response = await fetch(`${url}/search?query=${coinSearch}`);
      const data = await response.json();

      dispatch({
        type: SEARCH_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
