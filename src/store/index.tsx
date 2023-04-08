import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import coinReducer from "../reducers/coinReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    coinReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store;
