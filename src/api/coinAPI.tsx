export const fetchCoins = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
        const data = await response.json();
        dispatch({ type: 'FETCH_COINS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_COINS_FAILURE', payload: error.message });
      }
    };
  };
  