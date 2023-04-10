import { combineReducers } from "redux";
import coinReducer from "./coinReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  coinReducer,
  searchReducer,
});

export default rootReducer;
