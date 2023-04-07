import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import coinReducer from '../reducers/coinReducer';


const store = createStore(coinReducer, applyMiddleware(thunk));

export default store;
