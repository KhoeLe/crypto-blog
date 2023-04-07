const initialState = {
    coins: [],
    loading: false,
    error: null,
  };

  const coinReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COINS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_COINS_SUCCESS':
        return {
          ...state,
          loading: false,
          coins: action.payload,
        };
      case 'FETCH_COINS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export default coinReducer;
