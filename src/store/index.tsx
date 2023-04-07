import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import coinReducer from "../reducers/coinReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    coinReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
